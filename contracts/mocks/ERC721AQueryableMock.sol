// SPDX-License-Identifier: MIT
// ERC721A Contracts v3.3.0
// Creators: Chiru Labs

pragma solidity ^0.8.4;

import "../extensions/ERC721AQueryable.sol";
import "../extensions/ERC721ABurnable.sol";

contract ERC721AQueryableMock is ERC721AQueryable, ERC721ABurnable {
    bytes32 private prediction;

    constructor(string memory name_, string memory symbol_) Nnata(name_, symbol_) {
        prediction = keccak256(abi.encodePacked("prediction"));
    }

    function safeMint(address to, uint256 quantity) public {
        _mint(to, quantity, prediction);
    }
}
