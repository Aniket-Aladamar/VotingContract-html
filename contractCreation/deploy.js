const ethers = require("ethers");
const fs = require("fs-extra");


async function main() {
    const provider = new ethers.JsonRpcProvider(
      "https://eth-sepolia.g.alchemy.com/v2/Your API KEY"
    );

    const wallet = new ethers.Wallet(
      "",
      provider
    );

    const abi = fs.readFileSync("./output-directory/_voting_sol_VotingSystem.abi", "utf8"); 
    const binary = fs.readFileSync("./output-directory/_voting_sol_VotingSystem.bin", "utf8"); 

    const candidateNames = ["Aniket", "Deekshith", "Momo"]; // Example candidate names
    const hoursAfterVoting = 72; // Example duration in hours

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Contract is deploying...");

    const contract = await contractFactory.deploy(candidateNames, hoursAfterVoting);
    const addr1 = await contract.getAddress();
    console.log("Contract deployed at ", addr1);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
