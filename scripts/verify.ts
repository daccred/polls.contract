
import hre from 'hardhat'
import { time } from "@nomicfoundation/hardhat-network-helpers";

// const outcomes = constants.outcomes
const fee = hre.ethers.utils.parseEther("1");
const maxSupply = hre.ethers.utils.parseUnits("4", 0);



async function verify() {
  const expiry = (await time.latest()) + 2419200; // one month from now
  await hre.run("verify:verify", {
    address: "0x36a6274eF8687DCfD124CeB1eA164928F971c092",
    constructorArguments: [
      "Who among these Housemates will be the least voted Female housemate in the Finale of BBN Season 7",
      "WATH",
      "0xd3C18B9460E3c2529d203166c011531B4B10B7BE",
      ["0x4d69646e69676874000000000000000000000000000000000000000000000000", "0x5765656b656e6400000000000000000000000000000000000000000000000000"],
      fee,
      maxSupply,
      expiry
    ],
  });
}

verify()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


