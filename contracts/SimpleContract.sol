// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract SimpleContract{

    address[] public addresses;
    mapping(address => uint256) public addressToNumber;

    function getaAdressesLen() public view returns(uint256){
        return addresses.length;
    }

    function changeYourNumber (uint256 number) public{
        addressToNumber[msg.sender] = number;
        addresses.push(msg.sender);
    }
    
}