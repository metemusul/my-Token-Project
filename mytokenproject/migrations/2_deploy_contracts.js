const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  const initialSupply = web3.utils.toWei('100000', 'ether'); // 100,000 token
  deployer.deploy(MyToken, initialSupply);
};