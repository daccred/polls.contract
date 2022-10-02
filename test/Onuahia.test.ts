import { constants } from "./helpers";
import { ethers } from "hardhat";
import { Onuahia } from "types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

/// @notice Never call the contract methods async, always async the chai.expect
import { expect } from "chai";
import { time } from "@nomicfoundation/hardhat-network-helpers";

// const {deployContract, provider } = waffle;
// import Onu from '../artifacts/contracts/Onuahia.sol/Onuahia.json'

describe("The Onuahia", function () {
    /* instantiate contract, so we get types too */
    let onuahia: Onuahia;
    let curator: SignerWithAddress;
    const symbol = "WIWS7";
    const name = "Will Ijeaoma win Season 7";
    // const outcomes = constants.outcomes
    const fee = ethers.utils.parseEther("1");
    const maxSupply = ethers.utils.parseUnits("4", 0);

    beforeEach(async function () {
        /* We cant run tests against the dates for now */
        const expiry = (await time.latest()) + 2419200; // one month from now

        const [owner, stakerOne, stakerTwo] = await ethers.getSigners();

        /* Deploy contract with variables */
        const contract = await ethers.getContractFactory("Onuahia");
        onuahia = await contract.deploy(name, symbol, owner.address, constants.outcomes, fee, maxSupply, expiry);

        /* using waffle deployer */
        // onuahia = await deployContract(owner, Onu,[name, symbol, owner.address, constants.outcomes, fee, maxSupply, expiry] )
        /* owner is the curator */
        this.owner = owner;
        curator = owner;

        this.stakerOne = stakerOne;
        this.stakerTwo = stakerTwo;
    });

    /* ----------------------------- START ------------------------------------ */
    context("Validate Market", function () {
        it("Each Prediction starts out with no values and stakes", async function () {
            for (let i = 0; i < constants.outcomes.length; i++) {
                const prediction = await onuahia.predictions(constants.outcomes[i]);
                expect(prediction.isResolution).to.equal(0);
                expect(prediction.value).to.equal(0);
                expect(prediction.count).to.equal(0);
            }
        });

        it("has a mapped struct with index for all possible constants.outcomes", async function () {
            for (let i = 0; i < constants.outcomes.length; i++) {
                const prediction = await onuahia.predictions(constants.outcomes[i]);
                expect(prediction.hash).to.equal(constants.outcomes[i]);
            }
        });
        it("global variable for contract resolution state", async function () {
            const resolution = await onuahia.__resolution__();
            expect(resolution).to.be.hexEqual("0x0");
        });
        it("has not been resolved", async function () {
            const resolved = await onuahia.__resolved__();
            expect(resolved).to.be.false;
        });

        it("sets name and symbol for collection", async function () {
            const name = await onuahia.name();
            const symbol = await onuahia.symbol();
            expect(name).to.equal(name);
            expect(symbol).to.equal(symbol);
        });
        it("has a sale price or purchase fee", async function () {
            const fee = await onuahia.fee();
            expect(fee).to.equal(fee);
        });
        it("has zero total supply", async function () {
            const supply = await onuahia.totalSupply();
            expect(supply).to.equal(0);
        });
        it("accurately sets max supply", async function () {
            const limit = await onuahia.maxSupply();
            expect(limit).to.equal(maxSupply);
        });
    });
    /* ----------------------------- END ------------------------------------ */

    /* ----------------------------- START ------------------------------------ */
    // TokenSupplyLimitError

    context("[Event] Prediction Workflow", function () {
        it("reverts if ether value is greater than the required amount", async function () {
            const action = onuahia.connect(this.stakerOne).stake(constants.outcomes[0], 2, { value: fee.mul(5) });
            // opposite is  expect(action).to.not.reverted
            await expect(action).to.be.reverted;
        });
        it("reverts if ether value is less than the required amount", async function () {
            const action = onuahia.connect(this.stakerTwo).stake(constants.outcomes[0], 2, { value: fee.mul(1) });
            await expect(action).to.be.reverted;
        });
        it("reverts if a curator tries to stake", async function () {
            // const action = onuahia.stake(constants.outcomes[0], 2, { value: fee.mul(2) })
            // console.log(await action)
            await expect(onuahia.stake(constants.outcomes[0], 2, { value: fee.mul(2) })).to.be.revertedWith("N_CR");
        });

        it("reverts if staker tries to mint beyond MAX_SUPPLY", async function () {
            const activity = onuahia.connect(this.stakerOne).stake(constants.outcomes[0], 10, { value: fee.mul(10) });
            await expect(activity).to.be.revertedWith("TokenSupplyLimitError");
        });
        it("reverts if prediction is not a valid bytes32 outcome", async function () {
            await expect(onuahia.connect(this.stakerOne).stake(constants.ZERO_BYTES32, 2, { value: ethers.utils.parseEther("2") })).to.be.revertedWith(
                "NotValidEventError"
            );
        });
        /* false positive, since a zero address cannot be a signer, but yeah \^^/ */
        it("reverts is the staker address is address(0)", async function () {
            await expect(onuahia.connect(constants.ZERO_ADDRESS).stake(constants.outcomes[0], 2, { value: ethers.utils.parseEther("2") })).to.be.reverted;
        });

        it("reverts if the event is expired", async function () {
            const contract = await ethers.getContractFactory("Onuahia");
            const mockExpiry = await time.latest();
            const newfixTure = await contract.deploy(name, symbol, this.owner.address, constants.outcomes, fee, maxSupply, mockExpiry);
            await expect(newfixTure.connect(this.stakerOne).stake(constants.outcomes[1], 2, { value: ethers.utils.parseEther("2") })).to.be.revertedWith(
                "Expired"
            );
        });
    });
    /* ----------------------------- END ------------------------------------ */

    // /* ----------------------------- START ------------------------------------ */
    context("[Staker] Token has the right prediction", function () {
        let staker: SignerWithAddress;

        beforeEach(async function () {
            staker = (await this.stakerOne) as typeof curator;
            await onuahia.connect(staker).stake(constants.outcomes[0], 2, { value: fee.mul(2) });
        });

        it("returns the owners prediction", async function () {
            expect(await onuahia.predictionOf(0)).to.equal(constants.outcomes[0]);
            expect(await onuahia.predictionOf(1)).to.equal(constants.outcomes[0]);
        });
        it("ensure staker is owner of prediction", async function () {
            expect(await onuahia.ownerOf(0)).to.equal(staker.address);
            expect(await onuahia.ownerOf(1)).to.equal(staker.address);
        });

        it("emits event upon successful stake", async function () {
            const currentSupply = await onuahia.totalSupply();
            const stakeTx = await onuahia.connect(staker).stake(constants.outcomes[0], 1, { value: fee.mul(1) });

            //  should mint Transfer event
            await expect(stakeTx).to.emit(onuahia, "Transfer").withArgs(constants.ZERO_ADDRESS, staker.address, currentSupply);

            // should mint stake event
            await expect(stakeTx).to.emit(onuahia, "Stake").withArgs(staker.address, fee.mul(1), 1, constants.outcomes[0]);
        });
    });

    // describe("valueOf", async function () {
    //     it("returns the owners prediction", async function () {
    //         expect(await this.erc721a.predictionOf(0 + this.startTokenId)).to.equal(PREDICTION);
    //         expect(await this.erc721a.predictionOf(1 + this.startTokenId)).to.equal(PREDICTION);
    //         expect(await this.erc721a.predictionOf(5 + this.startTokenId)).to.equal(PREDICTION);
    //     });
    // });

    // it("transfers the ownership of the given token ID to the given address", async function () {
    //     expect(await this.erc721a.ownerOf(this.tokenId)).to.be.equal(this.to);
    // });

    // it("emits a Transfer event", async function () {
    //     await expect(this.transferTx).to.emit(this.erc721a, "Transfer").withArgs(this.from, this.to, this.tokenId);
    // });

    // it("clears the approval for the token ID", async function () {
    //     expect(await this.erc721a.getApproved(this.tokenId)).to.be.equal(ZERO_ADDRESS);
    // });

    // it("emits an Approval event", async function () {
    //     await expect(this.transferTx).to.emit(this.erc721a, "Approval").withArgs(this.from, ZERO_ADDRESS, this.tokenId);
    // });

    // it("adjusts owners balances", async function () {
    //     expect(await this.erc721a.balanceOf(this.from)).to.be.equal(1);
    // });

    // /* ----------------------------- END ------------------------------------ */

    // /* ----------------------------- START ------------------------------------ */
    //    context("[Event] Prediction Workflow", function () {
    //     it("reverts if prediction is not a valid bytes32 outcome", async function () {

    //         for (let i = 0; i < outcomes.length; i++) {
    //             const prediction = await onuahia.predictions(outcomes[i]);
    //             expect(prediction.isResolution).to.equal(0)
    //             expect(prediction.value).to.equal(0)
    //             expect(prediction.count).to.equal(0)
    //         }
    //     });
    // })
    // /* ----------------------------- END ------------------------------------ */

    // const createTestSuite = ({ contract, constructorArgs }: CreateTestSuiteArgs) =>
    //     function () {
    //         context(`${contract}`, function () {
    //             /* Initialize contract variables */
    //             let market;
    //             let ownerAddress;

    //             beforeEach(async function () {
    //                 const [curator, staker] = await ethers.getSigners();
    //                 market = await deployContract(contract, constructorArgs);
    //             });

    //             /* ----------------------------- END ------------------------------------ */

    //             describe("[Event] Stake Prediction Workflow", async () => {
    //                 it("");
    //                 it("reverts is max supply cap is exceeded"); //
    //                 it("reverts if the msg.value amount is below the stake fee per outcome"); //
    //                 it("reverts if the event is expired"); //
    //                 it("reverts is the staker address is address(0)"); //

    //                 // Should be evaluated in context
    //                 it("balance equals to value of totalMinted() x sale or purchase price");
    //             });
    //             /* ----------------------------- END ------------------------------------ */

    //             /* ----------------------------- START ------------------------------------ */
    //             describe("[Event] Resolution Workflow", async () => {
    //                 it("ensures admin earnings are reserved after resolution");
    //                 it("ensures that curator earnings are reserved after resolution");
    //                 it("calls the calculate reward function to update MarketConfig/Slot");
    //                 it("updates the value of a MarketConfig with isResolved and value", async () => {
    //                     // here the MarketSlot.isresolved is set to true
    //                     // MarketSlot.value is also updated with the calculated rewards
    //                 });

    //                 it("reverts if event has not expired");
    //                 it("ensures that event has expired and is due for resolution");

    //                 it("ensures that resolver is owner of contract");
    //                 it("ensures that admin resolution is only authorized from registry");

    //                 it("only has one resolved outcome");
    //                 it("sets global resolved variable to true");
    //                 it("reverts is event has already been resolved");
    //                 it("reverts if admin or curator attempts to create another outcome after a resolution");
    //             });
    //             /* ----------------------------- END ------------------------------------ */

    //             /* ----------------------------- START ------------------------------------ */
    //             describe("[Event] Stakers Earning Workflow", async () => {
    //                 it("reverts if token is at loss");
    //                 it("ensures that token ownership has information about outcome");
    //                 it("burns the token when redemption of earnings are requested");

    //                 it("can validate if token.id has value based on prediction bytes32 hash", async () => {
    //                     // here we check in tokenOwnership.prediction
    //                     // Then validate that _outcomes[tokenOwnership.prediction].isResolution = true
    //                     // else we can return true / false / 0 / 1 / or revert
    //                 });

    //                 it("enables earners to withdraw earning for a single token.id");
    //                 it("enables stakers to withdraw earnings for all their tokens.ids[] in AddressData.balance");
    //             });
    //             /* ----------------------------- END ------------------------------------ */
    //         });
    //     };

    /**
 * 
 *   onuahia = await contract.deploy(name, symbol, owner.address, constants.outcomes, fee, maxSupply, expiry);
 // duplicate:  ["0x4d69646e69676874000000000000000000000000000000000000000000000000", "0x5765656b656e6400000000000000000000000000000000000000000000000000", "0x5765656b656e6400000000000000000000000000000000000000000000000000", "0x4e6f6f6e00000000000000000000000000000000000000000000000000000000"]
 // next month: 1665409665000
 //    2419200
 // curator: 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
 // zero: 0x0000000000000000000000000000000000000000
 // deployOnuahia sig: 0xebca512f
 * 
 * 
 */
});