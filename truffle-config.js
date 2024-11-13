const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(process.env.SEPOLIA_PRIVATE_KEY, `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
      network_id: 11155111, // Sepolia ID
      gas: 200000,
      gasPrice: 1000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
