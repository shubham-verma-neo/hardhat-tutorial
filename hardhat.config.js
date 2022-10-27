/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle');

const ALCHEMY_API_KEY = "F6XjMAuua39J3QlDpgyMawv__sKrTuEZ";
const GOERLI_PRIVATE_KEY = "7a0df31b65be5829dd05c2a5ac6a7d7d345482dee06f560687535af56921b5b1";

module.exports = {
  solidity: "0.8.17",

  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts:[`${GOERLI_PRIVATE_KEY}`]
    }
  }
};