const market = artifacts.require("avaxTreezMarket");
const nft = artifacts.require("avaxTreezNFT");

module.exports = function (deployer) {

   

   await deployer.deploy(nft,"https://avaxtreez.mypinata.cloud/ipfs/QmaEZeKB3ZLTnikUF41sETTF1fVzotkrmB8EUWgP9PxxBj/");

   await deployer.deploy(market);



};
