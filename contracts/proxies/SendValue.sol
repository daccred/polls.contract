// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SendValue {
    receive() external payable {}

    fallback() external payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function sendViaTransfer(address payable _to) public payable {
        _to.transfer(msg.value);
    }

    function sendViaSend(address payable _to) public payable {
        bool sent = _to.send(msg.value);
        require(sent, "Failed to send Ether");
    }

    function sendViaCall(address payable _to) public payable {
        (bool sent, ) = _to.call{ value: msg.value }("");
        require(sent, "Failed to send");
    }
}
