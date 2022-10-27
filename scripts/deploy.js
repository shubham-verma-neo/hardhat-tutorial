const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    const NeoToken = await ethers.getContractFactory("NeoToken");
    const instance = await NeoToken.deploy("NeoToken", "NT");
    console.log("Token Address: ", instance.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });