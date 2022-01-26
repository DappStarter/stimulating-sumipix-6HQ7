require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin option forget squeeze'; 
let testAccounts = [
"0xeebe5873fcbc33d038b0946c74c43d08c49862d1923dd44df14e3fe1c466c649",
"0x2968307e1355482e090c883ab71ea4a127e4a9922ad3baf7323fa9972dd3e08b",
"0x4ebe123cd88e1a0f7ea4b9c18f6215d03cb6143fc7ec675b9d03d54d94c607c2",
"0xed4a96ee2d8fce29ee82c507bebeab470af9e30c95233f26deff38c8a4b39204",
"0x2c611d4ea695fa690df11cc8c17811db072fc7bcaf9a123ebe80cf55b8a7b589",
"0x1bd3984f8a20f659e0aac4dc4c899dc80e8a52f50c79e6dec55b863ae9979f9c",
"0x2da42a2679e782feefd4f2a1a444c6240e38fb025d0e3ea31d40fa14360d9420",
"0x7160da8cf6ee1295e7e91c908ff186723be114a5582cf92d85734b9d6356f954",
"0xd114d92035558638560d2f7688761275cfcc4b0c3df2cbc24520aefdb89f05f7",
"0x140016a0d068e61ef162a0fc7cef305c8360e1f3a22a5f24384fe9a18d1f3eab"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


