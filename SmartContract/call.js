//设置web3连接
var Web3 = require('web3');
//http://localhost:7545 为Ganache提供的节点链接
var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//读取合约
var fs = require('fs');
var contractCode = fs.readFileSync('Hello.sol').toString();
//编译合约代码
var solc = require('solc');
var compileCode = solc.compile(contractCode);
//获取合约abi和字节码
var abi = JSON.parse(compileCode.contracts[':Hello'].interface);

/*
solcjs --bin --abi Hello.sol
var abi = JSON.parse(fs.readFileSync("Hello.abi"))
var bin = fs.readFileSync("Hellp.bin")
*/

//创建合约对象
var addr = "0xE201d875eCcFfD85290e41199e6ac0D9E56BEe83";
var VotingContract = web3.eth.contract(abi).at(addr);

//0x00ede8b236d83909f5b9888686296df6e9cc4d77为合约部署地址
//var contractInstance = VotingContract.at(addr);
var myContract = VotingContract.set({from:web3.eth.coinbase,gas:100000},function(err,result){
  if(err){
    console.log(err);
  }else{
    console.log("eilinge",result);
  }
})

console.log(VotingContract);
//console.log(VotingContract.say.call("hello,my love"));
console.log(VotingContract.say("hello,my love"));
/*
say:
 { [Function: bound ]
   request: [Function: bound ],
   call: [Function: bound ],
   sendTransaction: [Function: bound ],
   estimateGas: [Function: bound ],
   getData: [Function: bound ],
   string: [Circular] },
*/
//console.log(VotingContract._c.sendTransaction({data:"0x"+abi,from:web3.eth.coinbase,gas:gasEstimate}));
//console.log(web3.toBigNumber(VotingContract._c.call()));
console.log(web3.toBigNumber(VotingContract._b()));
VotingContract._c(function(err,result){
  if(err){
    console.log(err);
  }else{
    console.log("_c",result);
  }
})
