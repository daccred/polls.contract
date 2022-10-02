// SPDX-License-Identifier: MIT
// ERC721A Contracts v3.3.0
// Creators: Chiru Labs

pragma solidity ^0.8.4;

import "../Nnata.sol";

contract ERC721AGasReporterMock is Nnata {
    bytes32 private prediction = keccak256(abi.encodePacked("prediction"));

    constructor(string memory name_, string memory symbol_) Nnata(name_, symbol_) {}

    function safeMintOne(address to) public {
        _mint(to, 1, prediction);
    }

    function mintOne(address to) public {
        _mint(to, 1, prediction);
    }

    function safeMintTen(address to) public {
        _mint(to, 10, prediction);
    }

    function mintTen(address to) public {
        _mint(to, 10, prediction);
    }
}
