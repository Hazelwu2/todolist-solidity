require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    localhost: {
      // Ganache Port
      url: "http://127.0.0.1:8545"
    },
    // 測試網路 Rinkeby
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      // 帳戶私鑰；如果是硬體錢包地址，欄位值請設為 remote
      accounts: [process.env.privateKey1],
      chainId: 4,
    },
    // 測試網路 Ropsten
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: { mnemonic: process.env.mnemonic, },
    },
    // 主網
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      // gasPrice: mainnetGwei * 1000000000,
      // accounts: { mnemonic: mnemonic(), },
    },
  },
  solidity: "0.8.10",
  paths: {
    artifacts: './eth-todo-list-react/src/artifacts',
  },
};