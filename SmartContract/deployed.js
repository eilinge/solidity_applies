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

console.log(compileCode);

//获取合约abi和字节码
var abi = JSON.parse(compileCode.contracts[':Hello'].interface);
var byteCode = compileCode.contracts[':Hello'].bytecode;

//在节点的VM节点中执行一个消息调用，或交易。但是不会合入区块链中。返回使用的gas量
//json: cannot unmarshal hex string without 0x prefix into Go value of type hexutil.Bytes
//let gasEstimate = web3.eth.estimateGas({data:"0x"+byteCode});
//console.log("gasEstimate",gasEstimate);
//创建合约对象
var VotingContract = web3.eth.contract(abi);
//部署合约，并返回部署对象
var deployedContract = VotingContract.new(3,7,{
    data:"0x"+byteCode,
    from:web3.eth.accounts[0],  //部署合约的外部账户地址
    //Error: gas required exceeds allowance or always failing transaction
    //maxGas:
    gas:1000000},function(err,result){ //部署合约的矿工费
      if(err){console.log(err)
      }else{console.log(result,result.address,result.transactionHash)}
    });

//console.log(deployedContract);
//eth.getHashrate(function(err,result){if(err){console.log(err)}else{console.log}})
