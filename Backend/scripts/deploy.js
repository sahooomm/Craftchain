const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const CraftBatch = await ethers.getContractFactory("CraftBatch721");
  const craftBatch = await CraftBatch.deploy();

  // ✅ In Ethers v6, no `.deployed()` — instead wait for `waitForDeployment()`
  await craftBatch.waitForDeployment();

  console.log("CraftBatch721 deployed to:", await craftBatch.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
