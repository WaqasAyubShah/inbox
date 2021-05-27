const path = require('path');            //path is created to called inbox path
const fs = require('fs');                //Fs stands for file sync
const solc = require('solc');            //solc stands for solidity compiler

const inboxPath = path.resolve(__dirname, 'contracts' , 'Inbox.sol');        //created a path resolver, with the root directory follow by next forlders
const source = fs.readFileSync(inboxPath , 'utf8');

//console.log( solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':Inbox'];
