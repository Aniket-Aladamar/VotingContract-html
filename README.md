# Decentralized Voting Application

## Introduction
This project is a decentralized voting application (DApp) built on blockchain technology, aiming to ensure transparent and secure elections. The DApp comprises a smart contract deployed with candidate names and a specified voting period. Users interact with the contract through a user-friendly web interface, connecting their Web3 wallets to cast votes for candidates by ID. Once the voting period ends, the function is disabled, and results are displayed.

## Features
- **Decentralized:** Built on blockchain technology to eliminate the vulnerabilities associated with centralized voting systems.
- **Smart Contract:** Developed a Solidity smart contract to manage candidate names, voting duration, and enforce the rules of the voting process.
- **Integration with the Contract:** Created a front end using HTML, CSS, and JavaScript to seamlessly integrate with the smart contract, allowing users to interact with the voting system.
- **Web3 Wallet Integration:** Users can securely connect their Web3 wallets (e.g., MetaMask) to cast votes and monitor real-time results.
- **Real-time Updates:** Provides real-time updates on the status of the voting process, including remaining voting time and the number of votes cast for each candidate.

## Chapters
1. **Developing a Smart Contract:** Details the process of developing the smart contract, including initialization with candidate names and a voting duration, and functions to manage the voting process.
2. **Integration with the Contract:** Describes the integration of the smart contract with a user-friendly front end, enabling seamless interaction for users to cast votes and monitor results.

## Installation
- Clone the repository:
https://github.com/Aniket-Aladamar/VotingContract-html

- Install dependencies:
cd decentralized-voting-app
npm install
yarn
corepack enable 
yarn add solc@0.8.7-fixed
yarn add ethers yarn add fs

- Deploy the contract:
  yarn solcjs --abi --bin --include-path ./node_modules --base-path . -o ./output-directory ./voting.sol


## Usage
- Start the development server:
Open your browser and navigate to http://127.0.0.1:5500/VotingContract-html/ContractIntraction/index.html

## Technologies Used
- Solidity
- Ethereum Blockchain
- HTML/CSS/JavaScript
- Web3.js
- Node.js

## Contributors
- Aniket aladamar (https://github.com/Aniket-Aladamar)
- Deekshith R Prabhu (https://github.com/deekshithrp)
- G. Mohith (https://github.com/Gmohith7)

## License
This project is licensed under the [MIT License](LICENSE).
