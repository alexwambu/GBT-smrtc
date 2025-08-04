require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.21",
  defaultNetwork: "gbtnetwork",
  networks: {
    gbtnetwork: {
      url: process.env.RPC_URL,
      chainId: 999,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
