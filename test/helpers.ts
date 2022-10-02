import { ethers } from "hardhat";
const { BN } = require("bn.js");

export interface CreateTestSuiteArgs {
    contract: string;
    constructorArgs: any[];
}

export const deployContract = async function (contractName: string, constructorArgs: any) {
    let factory;
    try {
        factory = await ethers.getContractFactory(contractName);
    } catch (e) {
        factory = await ethers.getContractFactory(contractName + "UpgradeableWithInit");
    }
    let contract = await factory.deploy(...(constructorArgs || []));
    await contract.deployed();
    return contract;
};

export const constants = {
    ZERO_ADDRESS: "0x0000000000000000000000000000000000000000",
    PREDICTION: "0x4b233c1d5eda54dd2330e1ce9ccbcdb1a9390a9bdab218af102142220baf833a",
    METADATA_URI: "https://nft.bbnpolls.xyz/api/meta/",
    ZERO_BYTES32: "0x0000000000000000000000000000000000000000000000000000000000000000",
    MAX_UINT256: new BN("2").pow(new BN("256")).sub(new BN("1")),
    MAX_INT256: new BN("2").pow(new BN("255")).sub(new BN("1")),
    MIN_INT256: new BN("2").pow(new BN("255")).mul(new BN("-1")),
    nextMonth: Date.now() + 1665409665000,
    outcomes: [
        "0x4e6f207368652077696c6c206e6f740000000000000000000000000000000000",
        "0x59657320746865792077696c6c00000000000000000000000000000000000000",
        "0x4e6f20746865792077696c6c206e6f7400000000000000000000000000000000",
    ],
};
