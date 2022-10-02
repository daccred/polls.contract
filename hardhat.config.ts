require("dotenv").config();
import { HardhatUserConfig } from "hardhat/config";

import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";

/* Build & Testing utils */
import "solidity-coverage";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";

// if (process.env.REPORT_GAS) {
// }

const ALCHEMY_API_MATIC = process.env.ALCHEMY_API_KEY_MATIC;

/* DEFAULT TO A GANACHE PRIVATE KEY FOR CI ENVIRONMENTS */
const PRIVATE_KEY = process.env.NODE_ENV == "ci" ? "0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d" : process.env.PRIVATE_KEY;

// This adds support for typescript paths mappings
import "tsconfig-paths/register";

const config: HardhatUserConfig = {
    defaultNetwork: 'matic',
    etherscan: {
        // Your API key for Polygon Scan: defaults automatically
        apiKey: process.env.POLYGONSCAN_KEY,
    },
    solidity: {
        compilers: [
            {
                version: "0.8.9",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    mocha: {
        timeout: 600000,
    },
    contractSizer: {
        alphaSort: true,
        disambiguatePaths: false,
        runOnCompile: true,
        strict: true,
    },
    gasReporter: {
        currency: "USD",
        gasPrice: 100,
        showTimeSpent: true,
    },
    typechain: {
        outDir: "types",
        target: "ethers-v5",
        alwaysGenerateOverloads: false,
    },
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        matic: {
            url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_API_MATIC}`,
            accounts: [PRIVATE_KEY as string],
        },
        mumbai: {
            accounts: [PRIVATE_KEY as string],
            url: "https://rpc-mumbai.maticvigil.com",
        },
    },
};

export default config;
