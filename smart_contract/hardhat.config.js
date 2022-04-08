require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/7KB3vlyPz2SPPQ_Cq4gtUlfYp4bfmOUj',
      accounts:  ['a897e2bf837bcbaf373901b10bef476217adeb84b507a8f9b40299d894c480c6']
    }
  }
}


