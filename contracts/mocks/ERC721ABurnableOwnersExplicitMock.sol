// SPDX-License-Identifier: MIT
// ERC721A Contracts v3.3.0
// Creators: Chiru Labs

pragma solidity ^0.8.4;

import "../extensions/ERC721ABurnable.sol";
import "../extensions/ERC721AOwnersExplicit.sol";

contract ERC721ABurnableOwnersExplicitMock is Nnata, ERC721ABurnable, ERC721AOwnersExplicit {
    bytes32 private prediction;

    constructor(string memory name_, string memory symbol_) Nnata(name_, symbol_) {
        prediction = keccak256(abi.encodePacked("prediction"));
    }

    function exists(uint256 tokenId) public view returns (bool) {
        return _exists(tokenId);
    }

    function safeMint(address to, uint256 quantity) public {
        _mint(to, quantity, prediction);
    }

    function setOwnersExplicit(uint256 quantity) public {
        _setOwnersExplicit(quantity);
    }

    function getOwnershipAt(uint256 index) public view returns (TokenOwnership memory) {
        return _ownerships[index];
    }
}
