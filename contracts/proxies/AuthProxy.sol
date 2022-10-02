// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity >=0.8.4;

import { Authority } from "../interfaces/IAuthority.sol";

/// @notice a standalone Authority implementation for admin contracts
/// @dev AuthProxy can implement an NFT Gated authorization mechanism > independently
/// however in this case we will manually implenent the authorization scope based on mappings
contract AuthProxy is Authority {
    error UserNotAuthorized(address user);

    /// @dev Map of contract admins
    /// @notice a complex mapping of user => target contract => function signature
    mapping(address => mapping(address => mapping(bytes4 => bool))) private _admins;

    modifier admin() {
        /// @dev Require callers address is set to true.
        if (!_admins[msg.sender][address(this)][msg.sig] == true) {
            revert UserNotAuthorized(msg.sender);
        }
        _;
    }

    constructor() {
        ///@dev we authorize deployer to call addAdminUser
        _admins[msg.sender][address(this)][0x0281651f] = true;
    }

    function can(
        address user,
        address target,
        bytes4 func
    ) public view override returns (bool) {
        return _admins[user][target][func] || false;
        // revert UserNotAuthorized(user);
    }

    function addAdminUser(
        address user_,
        address target,
        bytes4 func
    ) public admin {
        /// @dev Require curator address is not a 0 address.
        require(user_ != address(0), "0x0 Curator");
        /// @dev Set map of the address to true;
        _admins[user_][target][func] = true;
    }
}
