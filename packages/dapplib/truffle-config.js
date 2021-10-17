require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth often unable install clip swift turkey'; 
let testAccounts = [
"0x99472071fde54d5df650f7e9694e0f162f34534120132aa9579b491de010c14e",
"0x976d94b3ac7389f80092d6c4e2b209f100689abafec2c846db6c0b024645bf20",
"0x03008baa753e5e2ca5fe3aa9cb3131f5392d87484903a1db7d246435e941da57",
"0x357a2349af2630226d689d7424e1d37829a90e06864e347b3ba47b37acd45016",
"0x9ae21e91c0e03c38064a8e6b177474024f17dc97affbba464338f1e8f6d45a02",
"0xcd887e98cad04f39cebb651fdfb883aee8cd7f9544826964721315228016c2bf",
"0xfc00e13dd210620fe35904ce7d87746914e412276216630b51252079c42d58d6",
"0x1180ecab8376f1efa115c886679492586db512bc31ed3b6773aeeec94d08fc34",
"0xf5b7e57549eed42f261dc4d665ecf12d3efac6b33446e4b5cb1cdc6f73bf1fa1",
"0x228934bca2651ae85af0237a4916f0d93c11cbacd2c0ea6cc4106d4df86803ac"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

