// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./IERC721ABurnable.sol";
import "../Nnata.sol";

/**
 * @title Nnata Burnable Token
 * @dev Nnata Token that can be irreversibly burned (destroyed).
 */
abstract contract ERC721ABurnable is Nnata, IERC721ABurnable {
    /**
     * @dev Burns `tokenId`. See {ERC721A-_burn}.
     *
     * Requirements:
     *
     * - The caller must own `tokenId` or be an approved operator.
     */
    function burn(uint256 tokenId) public virtual override {
        _burn(tokenId, true);
    }
}
