// your code here
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
//const provider  // your code here 
const provider = new HDWalletProvider(
  'cruise omit snap month crime mutual car junk envelope pole bar marriage',
  'https://rinkeby.infura.io/v3/34ab62c54a464bf19e1719a2bc5739ef'
  );
const web3 = new Web3(provider);   // your code here
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]); // address of the deployer
  //const result = // your code here
const result = await new web3.eth.Contract(JSON.parse(interface))
 .deploy({ data: '0x' + bytecode, arguments: [100000000000000000000, 'BCCoin', 0, 'BCC' , 100]
})
 .send({ from: accounts[0],gas: '1000000' });
  console.log('Contract deployed to', result.options.address); //address of the deployed contract
};
deploy();

