// SPDX-License-Identifier: GPL-3.0

// 	 _____     ______     ______     ______     ______     ______     _____
//  /\  __-.  /\  __ \   /\  ___\   /\  ___\   /\  == \   /\  ___\   /\  __-.
//  \ \ \/\ \ \ \  __ \  \ \ \____  \ \ \____  \ \  __<   \ \  __\   \ \ \/\ \
//   \ \____-  \ \_\ \_\  \ \_____\  \ \_____\  \ \_\ \_\  \ \_____\  \ \____-
//    \/____/   \/_/\/_/   \/_____/   \/_____/   \/_/ /_/   \/_____/   \/____/

pragma solidity ^0.8.4;

/// @notice Gas optimized reentrancy protection for smart contracts.
/// @author Daccred (https://github.com/daccred/contracts)
abstract contract Guarded {
    uint8 private locked = 1;

    modifier guarded() virtual {
        require(locked == 1, "Guarded");

        locked = 2;

        _;

        locked = 1;
    }
}
