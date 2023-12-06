const { ethers } = require("hardhat");
const { upgrades } = require("hardhat");

async function main() {
  const deployedToken = await ethers.deployContract("MyToken");
  const tokenAddress = await deployedToken.getAddress();
  console.log("Factory is deployed to:", tokenAddress);
}


main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

