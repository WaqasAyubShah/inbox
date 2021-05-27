const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
//const provider = ganache.provider();
const web3 = new Web3(ganache.provider());
const { interface , bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async() => {
  //get a list of all accounts
  //web3.eth.getAccounts().then(fetchedAccounts => {
  //this is how it work after cleaning it will be somthing below
  accounts = await web3.eth.getAccounts();
  //  console.log(fetchedAccounts); });
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: bytecode, arguments: ['Hi there!']})
  .send({from: accounts[0], gas:1000000 });
  //use one of those accounts to deploy the contract
   //inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploy contract', () => {
  console.log(inbox);
  });
});
//Test class and work with mocha
/*class Car{
  park()
  {
    return 'stopped';
  }
  drive()
  {
    return 'vroom';
  }
}

let car;

beforeEach(() => {
  car = new Car();
})

describe('My Car', () =>{
  it('Can park', () => {
    assert.equal(car.park(), 'stopped');
  })
  it('Car drive',() =>{
    assert.equal(car.drive(),'vroom');
  })
})*/
