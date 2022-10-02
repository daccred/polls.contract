// SPDX-License-Identifier: GPL-3.0

// 	 _____     ______     ______     ______     ______     ______     _____
//  /\  __-.  /\  __ \   /\  ___\   /\  ___\   /\  == \   /\  ___\   /\  __-.
//  \ \ \/\ \ \ \  __ \  \ \ \____  \ \ \____  \ \  __<   \ \  __\   \ \ \/\ \
//   \ \____-  \ \_\ \_\  \ \_____\  \ \_____\  \ \_\ \_\  \ \_____\  \ \____-
//    \/____/   \/_/\/_/   \/_____/   \/_____/   \/_/ /_/   \/_____/   \/____/

pragma solidity ^0.8.4;

/// import required libraries
import "./Nnata.sol";
import "./utils/Guard.sol";
import "./utils/Ownable.sol";

/**
 * @author Daccred.
 * @title Onuahia means the head of the market, or can also be reffered to as
 * bargains or trade. We use this contract to represent a stake in an event
 *
 * @dev  This NFT contract is deployed whenever a valid curator lists a new event.
 *       By architecture, it has a capped supply and a validity period,  and mints on
 *       this contract WILL not be greater than the capped supply or done after the validity period.
 *
 *       Deploying a new event from the Registry deploys this contract
 *       and the Event contract
 */

contract Onuahia is Nnata, Ownable, Guarded {
    /// @dev Capped supply.
    uint256 public maxSupply;

    /// @dev Expiry date.
    uint64 public expiry;

    /// @dev Akukwuo factory address
    address public registry;

    /// @dev The fee to stake a prediction
    uint256 public fee;

    /// @dev Commissions collector Address
    address private immutable collector = 0x791D56c0DfB46157E8999f6EE6bf76fB4d5BD810;
    uint8 private immutable curatorCommission = 10;
    uint8 private immutable registryCommission = 15;

    /**
     * @dev Prediction Market
     * PredictionSlot to store configs for all market predictions
     *
     * @param hash           a byte32 representation of an outcome in a market
     * @param value          This value says how much this prediction is worth, defaults to 0
     * @param count          number of nft tokens that represent this prediction+-
     * @param isResolution   This value answers whether our prediction is the winner, can be 0 or 1
     */
    struct Market {
        bytes32 hash;
        uint256 value;
        uint64 count;
        uint8 isResolution; // 0 or 1.
    }

    error MarketClosedError();

    error NotValidEventError();

    error TokenSupplyLimitError();

    error NotAllowedStakerError();

    /// @dev an array of all the outcomes with a cap_limit
    bytes32[] public outcomes;

    /// @dev use a map structs with index of outcomes to track predictions
    mapping(bytes32 => Market) public predictions;

    /// @dev Emitted when a user stakes.
    event Stake(address staker, uint256 amount, uint256 quantity, bytes32 outcome);

    /// @dev Resolution event to be used by indexers
    event Resolution(address eventAddress, bytes32 outcome, uint64 timestamp);

    /// @dev Earn event once earnings are distributed or redeemed
    event Earn(address recipient, uint256 amount);

    /// @dev a simple way to communicate value for this contract
    /// @notice Only by admin.
    bool public __resolved__ = false; // TBC

    /// @notice Only by curator.
    bytes32 public __resolution__ = 0x0; // TBC

    /// @dev    Constructor sets the owner, maxSupply and expiry date of
    ///         this particular NFT, then transfers ownership to curator
    constructor(
        string memory name,
        string memory symbol,
        address curator,
        bytes32[] memory outcomes_,
        uint256 fee_,
        uint256 maxSupply_,
        uint64 expiryDate_
    ) Nnata(name, symbol) {
        /// @dev Define the address of our Event Registry
        registry = _msgSender();

        /// @dev transfer ownership to curator, see Ownable
        _transferOwnership(curator);

        /// @dev Set Max supply.
        maxSupply = maxSupply_;

        /// @dev set the staking fee for this market
        fee = fee_;

        /// @dev Set Expiry date.
        expiry = expiryDate_;

        /// @dev append outcomes to global outcome var
        outcomes = outcomes_;

        /// @dev bootstrap our prediction market
        for (uint8 i = 0; i < outcomes_.length; i++) {
            bytes32 id = outcomes_[i];

            // All outcomes must be unique
            require(predictions[id].hash == bytes32(0), "no_duplicate");

            // bootstrap the outcomes mapping
            predictions[id] = Market(id, 0, 0, 0);
        }
    }

    /// @notice call to soft resolve an event by curators
    /// @notice can only be called by the curator who
    /// deployed this market :> can be called multiple times
    function resolveByCurator(bytes32 _prediction) external onlyOwner {
        require(!__resolved__, "event_closed");
        require(predictions[_prediction].hash != bytes32(0), "bad_outcome");

        __resolution__ = _prediction;
    }

    function resolveByAdmin(bytes32 _prediction) external {
        require(!__resolved__, "event_closed");

        require(msg.sender == registry, "!Registry");
        require(predictions[_prediction].hash != bytes32(0), "bad_outcome");

        _distributeEarnings(_prediction);
        __resolution__ = _prediction;
        __resolved__ = true;

        // emit event for Market resolution
        emit Resolution(address(this), _prediction, uint64(block.timestamp));
    }

    function valueOf(uint256 _tokenId) public view returns (uint256) {
        bytes32 tokenPrediction = predictionOf(_tokenId);
        return predictions[tokenPrediction].value;
    }

    function redeemEarnings(uint256 _tokenId) public guarded {
        require(__resolved__, "event_open");
        require(ownerOf(_tokenId) == msg.sender, "not_holder");

        bytes32 callerPrediction = predictionOf(_tokenId);

        require(__resolution__ == callerPrediction, "not_outcome");

        uint256 tokenValue = predictions[callerPrediction].value;

        _burn(_tokenId);

        Address.sendValue(payable(_msgSender()), tokenValue);
        emit Earn(_msgSender(), tokenValue);
    }

    function _calcTariff(uint8 tax, uint256 sum) private pure returns (uint256) {
        /// @notice we increase the denominator of tariffs by 10
        return (tax * sum) / 1000;
    }

    function _distributeEarnings(bytes32 _prediction) private {
        uint256 totalStakes = predictions[_prediction].count;

        if (totalStakes != 0) {
            uint256 earningExpected = _totalMinted() * fee;
            uint256 contractWallet = address(this).balance;

            /// @dev ensure that balance is greater than expected earnings
            require(contractWallet >= earningExpected, "short_ledger");

            /// @dev Admin takes 2%.
            uint256 adminRewards = _calcTariff(registryCommission, contractWallet);

            /// @dev Curator takes 1%.
            uint256 curatorRewards = _calcTariff(curatorCommission, contractWallet);

            /// @dev calc the value of a winning prediction
            uint256 tokenValue = (contractWallet - (adminRewards + curatorRewards)) / totalStakes;

            predictions[_prediction].value = tokenValue;
            predictions[_prediction].isResolution = 1;

            Address.sendValue(payable(collector), adminRewards);
            Address.sendValue(payable(owner()), curatorRewards);

            emit Earn(collector, adminRewards);
            emit Earn(owner(), curatorRewards);
        }
    }

    function stake(bytes32 hash, uint64 quantity) external payable guarded returns (bool) {
        // init variables hash, who, amount, quantity
        address staker = _msgSender();

        /// @dev handle checks in before hook
        _beforeStakePrediction(staker, hash, quantity, msg.value);

        /// @dev Mint token to address.
        _mint(staker, quantity, hash);

        /// @dev update the count for users who are part of this market
        predictions[hash].count += quantity;

        /// @dev Emit {Stake} event.
        emit Stake(staker, msg.value, quantity, hash);

        return true;
    }

    function _beforeStakePrediction(
        address staker,
        bytes32 outcome,
        uint64 quantity,
        uint256 amount
    ) private view {
        /// @dev ensure the amount sent is more or enough to secure quantity of predictions
        assert((fee * quantity) == amount);

        /// @dev Require event has not been resolved.
        if (__resolved__ == true) revert MarketClosedError();

        /// @dev Require Staker is not curator.
        require(staker != owner(), "N_CR");

        /// @dev Require Event has not expired.
        require(block.timestamp < expiry, "Expired");

        /// @dev Require that minting stake tokens will not extend the maxSupply.
        if ((_totalMinted() + quantity) > maxSupply) revert TokenSupplyLimitError();

        /// @dev Validate hash passed is event hash.
        if (predictions[outcome].hash == bytes32(0x0)) revert NotValidEventError();
    }

    /**
     * @dev  Increases the total supply of the Mintable NFTs on the
     *       contract by `_number`.
     *
     * @dev                  Can only be called from curator
     * @param _supply        Integer value to increase the supply by.
     */
    function increaseMaxSupplyByNumber(uint256 _supply) external onlyOwner {
        /// @dev Require market has not expired
        require(block.timestamp < expiry, "Ahia emechiela");
        /// @dev Increment the maxSupply.
        maxSupply += _supply;
    }

    // Function to receive Ether. msg.data must be empty
    receive() external payable {}
}
