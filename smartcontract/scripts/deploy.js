const { adminAccount } = require("../secrets.json");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account:", deployer.address);
    // console.log("Account balance:", (await deployer.getBalance()).toString());
    
    const NFTStake = await ethers.getContractFactory("NFTStake");
    const nftStake = await NFTStake.deploy(adminAccount);
    await nftStake.waitForDeployment();
    const address = await nftStake.getAddress();
    console.log("Deployed contract at ", address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
