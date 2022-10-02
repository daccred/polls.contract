
// import hre from 'hardhat'
import { time } from "@nomicfoundation/hardhat-network-helpers";
import { task } from "hardhat/config";



task("verifyMarket", "Prints the list of accounts", async (taskArgs, hre) => {
  // const outcomes = constants.outcomes
  const expiry = (await time.latest()) + 2419200; // one month from now

  await hre.run("verify:verify", {
    address: "0x36a6274eF8687DCfD124CeB1eA164928F971c092",
    constructorArguments: [
      "Who among these Housemates will be the least voted Female housemate in the Finale of BBN Season 7",
      "WATH",
      "0xd3C18B9460E3c2529d203166c011531B4B10B7BE",
      ["0x4d69646e69676874000000000000000000000000000000000000000000000000", "0x5765656b656e6400000000000000000000000000000000000000000000000000"],
      1,
      100,
      expiry
    ],
  });
});  
