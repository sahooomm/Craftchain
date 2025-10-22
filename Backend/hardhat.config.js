require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/JPp-6W_Z3rrCnkVl_sHK5",
      accounts: ["0xb4908dfcef69092c06d3a27ce5028a97dda0503c536b7bae3abc3fee3c153d0b"]
    }
  }
};
