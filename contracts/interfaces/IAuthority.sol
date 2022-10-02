// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity >=0.8.4;

interface Authority {
    function can(
        address user,
        address target,
        bytes4 functionSig
    ) external view returns (bool);
}
