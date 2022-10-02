// SPDX-License-Identifier: GPL-3.0

// 	 _____     ______     ______     ______     ______     ______     _____
//  /\  __-.  /\  __ \   /\  ___\   /\  ___\   /\  == \   /\  ___\   /\  __-.
//  \ \ \/\ \ \ \  __ \  \ \ \____  \ \ \____  \ \  __<   \ \  __\   \ \ \/\ \
//   \ \____-  \ \_\ \_\  \ \_____\  \ \_____\  \ \_\ \_\  \ \_____\  \ \____-
//    \/____/   \/_/\/_/   \/_____/   \/_____/   \/_/ /_/   \/_____/   \/____/
pragma solidity ^0.8.4;

/// import required libraries
import "./Onuahia.sol";

import "./utils/Auth.sol";
import "./interfaces/IAuthority.sol";

/// @author Daccred.
/// @dev Akwukwo is our registry we use this to track markets (onuahia)
/// @dev and deploy new markets
contract Akwukwo is Auth {
    /// @dev Array of all markets created here
    address[] public markets;

    /// @dev an event we emit when a new market is deployed
    event Market(address market, string name, address curator, uint256 fee);

    constructor(Authority _authority) Auth(msg.sender, _authority) {}

    function resolveByAdmin(address _eventAddress, bytes32 _prediction) public requiresAuth {
        Onuahia(payable(_eventAddress)).resolveByAdmin(_prediction);
    }

    /// @dev totalMarkets - function to return number of markets
    /// @notice because solidity cannot return full arrays
    ///     we write a getter to return the size of our markets
    ///     so we can run a loop on the client side to read them if we require
    /* @note can move to libs */
    function totalMarkets() public view returns (uint256) {
        return markets.length;
    }

    function deployOnuahia(
        string memory name,
        string memory symbol,
        address curator,
        bytes32[] memory outcomes,
        uint256 fee,
        uint256 maxSupply,
        uint64 expiryDate
    ) external requiresAuth returns (address ahia) {
        /// @notice run our checks before interaction
        _beforeAhiaOhuru(expiryDate, maxSupply, fee, outcomes);

        /// @notice: Generating this salt creates a constraint where
        /// The same arguments can not be used to deploy a new market
        bytes32 _salt = keccak256(abi.encodePacked(name, symbol, curator, fee, maxSupply, expiryDate));

        address ahiaOhuru = address(new Onuahia{ salt: _salt }(name, symbol, curator, outcomes, fee, maxSupply, expiryDate));

        /// @notice We update the registry
        markets.push(ahiaOhuru);
        emit Market(ahiaOhuru, name, curator, fee);

        return ahiaOhuru;
    }

    /* @note can move to libs */
    function _beforeAhiaOhuru(
        uint64 expiryDate,
        uint256 maxSupply,
        uint256 fee,
        bytes32[] memory outcomes
    ) private view {
        /// @dev Require time is set to future time.
        require(expiryDate > block.timestamp, "bad_date");
        /// @dev Require max supply is not 0.
        require(maxSupply != 0, "bad_supply");
        /// @dev Require minimum stake is not 0.
        require(fee != 0, "bad_fee");
        require(outcomes.length != 0, "bad_outcomes");
    }
}
