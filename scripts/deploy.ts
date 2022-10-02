import { ethers } from "hardhat";

const authProxy = "0xaa8742afb64E01BC5EB74DAC2CfE8ad04916f208";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    // const AuthProxy = await ethers.getContractFactory("AuthProxy");
    // const auth = await AuthProxy.deploy();

    // console.log("Auth Proxy deployed at", auth.address);

    console.log("Starting deployment for Registry");

    const Registry = await ethers.getContractFactory("Akwukwo");
    const registry = await Registry.deploy(authProxy);

    console.log("Registry deployed at:", registry.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
