//SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0 < 0.9.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import 'hardhat/console.sol';

contract NeoToken is ERC20{
    address owner;
    constructor(string memory _name, string memory _symbol) ERC20(_name, _symbol){
        _mint(msg.sender, 1000000 * 10**18);
        // console.log("**Constructor Runs**");
    }
}