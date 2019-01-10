开启私人节点:窗口1
	geth --rpc --rpcaddr "localhost" --rpcport 8545 --rpcapi "web3,net,eth,personal,miner,txpool" --datadir ".\data" --testnet --nodiscover --networkid 3 --syncmode "fast"

  (base) C:\Users\wuchan4x>geth --rpc --rpcport 8545 --rpcaddr "localhost" --testnet --nodiscover --rpcapi "web3,net,personal,eth,txpool"
  INFO [01-10|10:58:52.329] Maximum peer count                       ETH=25 LES=0 total=25
  INFO [01-10|10:58:52.358] Starting peer-to-peer node               instance=Geth/v1.8.16-stable-477eb093/windows-amd64/go1.11
  INFO [01-10|10:58:52.372] Allocated cache and file handles         database=C:\\Users\\wuchan4x\\AppData\\Roaming\\Ethereum\\testnet\\geth\\chaindata cache=768 handles=1024
  INFO [01-10|10:58:52.571] Persisted trie from memory database      nodes=355 size=51.89kB time=3.0077ms gcnodes=0 gcsize=0.00B gctime=0s livenodes=1 livesize=0.00B
  INFO [01-10|10:58:52.592] Initialised chain configuration          config="{ChainID: 3 Homestead: 0 DAO: <nil> DAOSupport: true EIP150: 0 EIP155: 10 EIP158: 10 Byzantium: 1700000 Constantinople: <nil> Engine: ethash}"
  INFO [01-10|10:58:52.617] Disk storage enabled for ethash caches   dir=C:\\Users\\wuchan4x\\AppData\\Roaming\\Ethereum\\testnet\\geth\\ethash count=3
  INFO [01-10|10:58:52.632] Disk storage enabled for ethash DAGs     dir=C:\\Users\\wuchan4x\\AppData\\Ethash                                   count=2
  INFO [01-10|10:58:52.642] Initialising Ethereum protocol           versions="[63 62]" network=3
  INFO [01-10|10:58:52.651] Loaded most recent local header          number=4491 hash=8bda66…cf5327 td=12779471078 age=5m42s
  INFO [01-10|10:58:52.657] Loaded most recent local full block      number=4491 hash=8bda66…cf5327 td=12779471078 age=5m42s
  INFO [01-10|10:58:52.662] Loaded most recent local fast block      number=4491 hash=8bda66…cf5327 td=12779471078 age=5m42s
  INFO [01-10|10:58:52.669] Loaded local transaction journal         transactions=6 dropped=6
  INFO [01-10|10:58:52.673] Regenerated local transaction journal    transactions=0 accounts=0
  WARN [01-10|10:58:52.677] Blockchain not empty, fast sync disabled
  INFO [01-10|10:58:52.680] Starting P2P networking
  INFO [01-10|10:58:52.683] RLPx listener up                         self="enode://58f7d4f9851f9f219dcc11bc9472290d95e79722527637faff8e74058c87ff1f62048a420f295cafbb885360fac440af9b9249ec54eeac066724551bb6367e12@[::]:30303?discport=0"
  INFO [01-10|10:58:52.684] IPC endpoint opened                      url=\\\\.\\pipe\\geth.ipc
  INFO [01-10|10:58:52.695] HTTP endpoint opened                     url=http://localhost:8545 cors= vhosts=localhost

  INFO [01-10|12:16:29.385] Submitted contract creation              fullhash=0xc7b6c17434751a72cf907f56c01a39c9b84b336c863d0e3e96655118ebf29d2c contract=0xD8B428d3Cb47D1765e3E03F196CC3B9A9dB4763D

链接节点:窗口2/windows
	geth attach \\.\pipe\geth.ipc
  窗口1:
  INFO [01-10|11:02:52.273] Etherbase automatically configured       address=0x436ef52588B8c2fB1eE14844aFe94BB78a4072b7

  INFO [01-10|11:09:34.862] Updated mining threads                   threads=12
  INFO [01-10|11:09:34.865] Transaction pool price threshold updated price=1000000000
  INFO [01-10|11:09:34.868] Commit new mining work                   number=4501 sealhash=3cd1dc…f040e0 uncles=0 txs=0 gas=0 fees=0 elapsed=0s
  INFO [01-10|11:09:36.829] Successfully sealed new block            number=4501 sealhash=3cd1dc…f040e0 hash=a5f315…111612 elapsed=1.961s
  INFO [01-10|11:09:36.833] 🔨 mined potential block                  number=4501 hash=a5f315…111612
  INFO [01-10|11:09:36.894] Commit new mining work                   number=4502 sealhash=c172fc…ab708f uncles=0 txs=0 gas=0 fees=0 elapsed=61.162ms
  窗口2:
  C:\Users\wuchan4x>geth attach \\.\pipe\geth.ipc
  Welcome to the Geth JavaScript console!

  instance: Geth/v1.8.16-stable-477eb093/windows-amd64/go1.11
  coinbase: 0x436ef52588b8c2fb1ee14844afe94bb78a4072b7
  at block: 4498 (Thu, 10 Jan 2019 11:02:04 CST)
   datadir: C:\Users\wuchan4x\AppData\Roaming\Ethereum\testnet
   modules: admin:1.0 debug:1.0 eth:1.0 ethash:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

  > miner.start()
  null

  窗口3:
  node deployed.js
  ...
  transactionHash: '0xc7b6c17434751a72cf907f56c01a39c9b84b336c863d0e3e96655118ebf29d2c',
  address: undefined,
  abi:
   [ { constant: true,
       inputs: [],
       name: '_b',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { constant: false,
       inputs: [],
       name: 'set',
       outputs: [],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'function' },
     { constant: true,
       inputs: [Array],
       name: 'say',
       outputs: [Array],
       payable: false,
       stateMutability: 'pure',
       type: 'function' },
     { constant: true,
       inputs: [],
       name: '_c',
       outputs: [Array],
       payable: false,
       stateMutability: 'view',
       type: 'function' },
     { inputs: [Array],
       payable: false,
       stateMutability: 'nonpayable',
       type: 'constructor' } ] } undefined '0xc7b6c17434751a72cf907f56c01a39c9b84b336c863d0e3e96655118ebf29d2c'
  _b:
      { [Function: bound ]
        request: [Function: bound ],
        call: [Function: bound ],
        sendTransaction: [Function: bound ],
        estimateGas: [Function: bound ],
        getData: [Function: bound ],
        '': [Circular] },

     set:
      { [Function: bound ]
        request: [Function: bound ],
        call: [Function: bound ],
        sendTransaction: [Function: bound ],
        estimateGas: [Function: bound ],
        getData: [Function: bound ],
        '': [Circular] },
     say:
      { [Function: bound ]
        request: [Function: bound ],
        call: [Function: bound ],
        sendTransaction: [Function: bound ],
        estimateGas: [Function: bound ],
        getData: [Function: bound ],
        string: [Circular] },
     _c:
      { [Function: bound ]
        request: [Function: bound ],
        call: [Function: bound ],
        sendTransaction: [Function: bound ],
        estimateGas: [Function: bound ],
        getData: [Function: bound ],
        '': [Circular] },
     allEvents: [Function: bound ] } '0xd8b428d3cb47d1765e3e03f196cc3b9a9db4763d' '0xc7b6c17434751a72cf907f56c01a39c9b84b336c863d0e3e96655118ebf29d2c'

  { contracts:
     { ':Hello':
        { assembly: [Object],
          bytecode: '608060405234801561001057600080fd5b5060405160408061026683398101806040528101908080519060200190929190805190602001909291905050508160008190555080600181905550505061020a8061005c6000396000f300608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632537499614610067578063b8e010de14610092578063d5c61301146100a9578063f5376e031461018b575b600080fd5b34801561007357600080fd5b5061007c6101b6565b6040518082815260200191505060405180910390f35b34801561009e57600080fd5b506100a76101bc565b005b3480156100b557600080fd5b50610110600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506101ce565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610150578082015181840152602081019050610135565b50505050905090810190601f16801561017d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561019757600080fd5b506101a06101d8565b6040518082815260200191505060405180910390f35b60015481565b60026000808282540192505081905550565b6060819050919050565b600054815600a165627a7a7230582020d794f4e7c37aeedc1a6f5d4ef82f80015689cfd68613d14821b046f535c4880029',
          functionHashes: [Object],
          gasEstimates: [Object],
          interface: '[{"constant":true,"inputs":[],"name":"_b","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"say","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"_c","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
          metadata: '{"compiler":{"version":"0.4.25+commit.59dbf8f1"},"language":"Solidity","output":{"abi":[{"constant":true,"inputs":[],"name":"_b","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"name","type":"string"}],"name":"say","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[],"name":"_c","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"a","type":"uint256"},{"name":"b","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"":"Hello"},"evmVersion":"byzantium","libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"":{"keccak256":"0x64e432e5a340b3b9cc85e8af01b6e1516c07766dea2e1d9fed7759d6a46d789c","urls":["bzzr://e984d5b3828a7feae6ff3db2a4cfa3b910fa493add96ed652fcbf4b031f9eadb"]}},"version":1}',
          opcodes: 'PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD PUSH1 0x40 DUP1 PUSH2 0x266 DUP4 CODECOPY DUP2 ADD DUP1 PUSH1 0x40 MSTORE DUP2 ADD SWAP1 DUP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 SWAP3 SWAP2 SWAP1 POP POP POP DUP2 PUSH1 0x0 DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0x1 DUP2 SWAP1 SSTORE POP POP POP PUSH2 0x20A DUP1 PUSH2 0x5C PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x62 JUMPI PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0x25374996 EQ PUSH2 0x67 JUMPI DUP1 PUSH4 0xB8E010DE EQ PUSH2 0x92 JUMPI DUP1 PUSH4 0xD5C61301 EQ PUSH2 0xA9 JUMPI DUP1 PUSH4 0xF5376E03 EQ PUSH2 0x18B JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x73 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x7C PUSH2 0x1B6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x9E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xA7 PUSH2 0x1BC JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x110 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 DUP1 DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP3 ADD DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY DUP3 ADD SWAP2 POP POP POP POP POP POP SWAP2 SWAP3 SWAP2 SWAP3 SWAP1 POP POP POP PUSH2 0x1CE JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP1 PUSH1 0x20 ADD DUP3 DUP2 SUB DUP3 MSTORE DUP4 DUP2 DUP2 MLOAD DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP DUP1 MLOAD SWAP1 PUSH1 0x20 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x150 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0x135 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x17D JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x197 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x1A0 PUSH2 0x1D8 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 PUSH1 0x0 DUP1 DUP3 DUP3 SLOAD ADD SWAP3 POP POP DUP2 SWAP1 SSTORE POP JUMP JUMPDEST PUSH1 0x60 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 KECCAK256 0xd7 SWAP5 DELEGATECALL 0xe7 0xc3 PUSH27 0xEEDC1A6F5D4EF82F80015689CFD68613D14821B046F535C4880029 ',
          runtimeBytecode: '608060405260043610610062576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632537499614610067578063b8e010de14610092578063d5c61301146100a9578063f5376e031461018b575b600080fd5b34801561007357600080fd5b5061007c6101b6565b6040518082815260200191505060405180910390f35b34801561009e57600080fd5b506100a76101bc565b005b3480156100b557600080fd5b50610110600480360381019080803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506101ce565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610150578082015181840152602081019050610135565b50505050905090810190601f16801561017d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561019757600080fd5b506101a06101d8565b6040518082815260200191505060405180910390f35b60015481565b60026000808282540192505081905550565b6060819050919050565b600054815600a165627a7a7230582020d794f4e7c37aeedc1a6f5d4ef82f80015689cfd68613d14821b046f535c4880029',
          srcmap: '142:413:0:-;;;331:75;8:9:-1;5:2;;;30:1;27;20:12;5:2;331:75:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;380:1;375:2;:6;;;;397:1;392:2;:6;;;;331:75;;142:413;;;;;;',
          srcmapRuntime: '142:413:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;308:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;308:14:0;;;;;;;;;;;;;;;;;;;;;;;507:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;507:45:0;;;;;;414:85;;8:9:-1;5:2;;;30:1;27;20:12;5:2;414:85:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;414:85:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;287:14;;8:9:-1;5:2;;;30:1;27;20:12;5:2;287:14:0;;;;;;;;;;;;;;;;;;;;;;;308;;;;:::o;507:45::-;543:1;537:2;;:7;;;;;;;;;;;507:45::o;414:85::-;461:6;487:4;480:11;;414:85;;;:::o;287:14::-;;;;:::o' } },
    sourceList: [ '' ],
    sources: { '': { AST: [Object] } } }
  gasEstimate 205803
  Contract {
    _eth:
     Eth {
       _requestManager: RequestManager { provider: [Object], polls: {}, timeout: null },
       getBalance: { [Function: send] request: [Function: bound ], call: 'eth_getBalance' },
       getStorageAt: { [Function: send] request: [Function: bound ], call: 'eth_getStorageAt' },
       getCode: { [Function: send] request: [Function: bound ], call: 'eth_getCode' },
       getBlock: { [Function: send] request: [Function: bound ], call: [Function: blockCall] },
       getUncle: { [Function: send] request: [Function: bound ], call: [Function: uncleCall] },
       getCompilers: { [Function: send] request: [Function: bound ], call: 'eth_getCompilers' },
       getBlockTransactionCount:
        { [Function: send]
          request: [Function: bound ],
          call: [Function: getBlockTransactionCountCall] },
       getBlockUncleCount:
        { [Function: send]
          request: [Function: bound ],
          call: [Function: uncleCountCall] },
       getTransaction:
        { [Function: send]
          request: [Function: bound ],
          call: 'eth_getTransactionByHash' },
       getTransactionFromBlock:
        { [Function: send]
          request: [Function: bound ],
          call: [Function: transactionFromBlockCall] },
       getTransactionReceipt:
        { [Function: send]
          request: [Function: bound ],
          call: 'eth_getTransactionReceipt' },
       getTransactionCount: { [Function: send] request: [Function: bound ], call: 'eth_getTransactionCount' },
       call: { [Function: send] request: [Function: bound ], call: 'eth_call' },
       estimateGas: { [Function: send] request: [Function: bound ], call: 'eth_estimateGas' },
       sendRawTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendRawTransaction' },
       signTransaction: { [Function: send] request: [Function: bound ], call: 'eth_signTransaction' },
       sendTransaction: { [Function: send] request: [Function: bound ], call: 'eth_sendTransaction' },
       sign: { [Function: send] request: [Function: bound ], call: 'eth_sign' },
       compile: { solidity: [Object], lll: [Object], serpent: [Object] },
       submitWork: { [Function: send] request: [Function: bound ], call: 'eth_submitWork' },
       getWork: { [Function: send] request: [Function: bound ], call: 'eth_getWork' },
       coinbase: [Getter],
       getCoinbase: { [Function: get] request: [Function: bound ] },
       mining: [Getter],
       getMining: { [Function: get] request: [Function: bound ] },
       hashrate: [Getter],
       getHashrate: { [Function: get] request: [Function: bound ] },
       syncing: [Getter],
       getSyncing: { [Function: get] request: [Function: bound ] },
       gasPrice: [Getter],
       getGasPrice: { [Function: get] request: [Function: bound ] },
       accounts: [Getter],
       getAccounts: { [Function: get] request: [Function: bound ] },
       blockNumber: [Getter],
       getBlockNumber: { [Function: get] request: [Function: bound ] },
       protocolVersion: [Getter],
       getProtocolVersion: { [Function: get] request: [Function: bound ] },
       iban:
        { [Function: Iban]
          fromAddress: [Function],
          fromBban: [Function],
          createIndirect: [Function],
          isValid: [Function] },
       sendIBANTransaction: [Function: bound transfer] },
    transactionHash: '0xc7b6c17434751a72cf907f56c01a39c9b84b336c863d0e3e96655118ebf29d2c',
    address: undefined,
    abi:
     [ { constant: true,
         inputs: [],
         name: '_b',
         outputs: [Array],
         payable: false,
         stateMutability: 'view',
         type: 'function' },
       { constant: false,
         inputs: [],
         name: 'set',
         outputs: [],
         payable: false,
         stateMutability: 'nonpayable',
         type: 'function' },
       { constant: true,
         inputs: [Array],
         name: 'say',
         outputs: [Array],
         payable: false,
         stateMutability: 'pure',
         type: 'function' },
       { constant: true,
         inputs: [],
         name: '_c',
         outputs: [Array],
         payable: false,
         stateMutability: 'view',
         type: 'function' },
       { inputs: [Array],
         payable: false,
         stateMutability: 'nonpayable',
         type: 'constructor' } ] } undefined '0xc7b6c17434751a72cf907f56c01a39c9b84b336c863d0e3e96655118ebf29d2c'

> eth.getBlock(4444)/[web3.]eth.getBlock("0x22d47fef7eca46cba844c50af76579e694a1df045993c954519d7085d9fefd89")
{
  difficulty: 4089893,
  extraData: "0xd883010810846765746886676f312e31318777696e646f7773",
  gasLimit: 8000000,
  gasUsed: 192111,
  hash: "0x22d47fef7eca46cba844c50af76579e694a1df045993c954519d7085d9fefd89",
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  miner: "0x436ef52588b8c2fb1ee14844afe94bb78a4072b7",
  mixHash: "0x06ef5143fff45785434cafeec7086f6fd8eab3069df84131e80c5727d4bf5a70",
  nonce: "0x2fb945ec2fc02635",
  number: 4444,
  parentHash: "0x7d90b618f2f56d29e8f1a061ceef6026ae1f1a5055ea0a8184f4d18e1a0d73ae",
  receiptsRoot: "0xe3009d21961c991a54c9f7529a7670b0680ee60217f60efc3c1965f0e4c1300e",
  sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  size: 1190,
  stateRoot: "0x26e3967db9e64b2140d4837249a2be965bda7f2ca66e240d83b09ccc8c0186c7",
  timestamp: 1547083489,
  totalDifficulty: 12614655745,
  transactions: ["0xcf1d59d66f259bb1178a94b36cc91ad5f42e510f46f5c56e80dffc91e2a80a1e"],
  transactionsRoot: "0x2aeb2a70aa08dee8802fb10c8772246cf46b52fb918273c7fed3de6c54062a9d",
  uncles: []
}

> eth.getTransaction("0xcf1d59d66f259bb1178a94b36cc91ad5f42e510f46f5c56e80dffc91e2a80a1e")
{
  blockHash: "0x22d47fef7eca46cba844c50af76579e694a1df045993c954519d7085d9fefd89",
  blockNumber: 4444,
  from: "0x436ef52588b8c2fb1ee14844afe94bb78a4072b7",
  gas: 192111,
  gasPrice: 1000000000,
  hash: "0xcf1d59d66f259bb1178a94b36cc91ad5f42e510f46f5c56e80dffc91e2a80a1e",
  input: "0x608060405234801561001057600080fd5b506040516040806102328339810180604052810190808051906020019092919080519060200190929190505050816000819055508060018190555050506101d68061005c6000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063253749961461005c578063d5c6130114610087578063f5376e0314610169575b600080fd5b34801561006857600080fd5b50610071610194565b6040518082815260200191505060405180910390f35b34801561009357600080fd5b506100ee600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061019a565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012e578082015181840152602081019050610113565b50505050905090810190601f16801561015b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017557600080fd5b5061017e6101a4565b6040518082815260200191505060405180910390f35b60015481565b6060819050919050565b600054815600a165627a7a72305820115ba7887f229622991be618257401467428000e7f1f8d722064e97eecb3163d0029",
  nonce: 18,
  r: "0xc4f54a46f46103b4eddc8db8e459eb3e81e134783c46a13410100e7ad3997ecb",
  s: "0x3129c7d654d0f61b47ba89f1dfb8789df0b2722d502e3d1a69a4846556814d42",
  to: null,
  transactionIndex: 0,
  v: "0x2a",
  value: 0
}

> eth.getCode("0x65eBF24F757F31C2d8a29080Ac6b38692904abaa")
"0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063253749961461005c578063d5c6130114610087578063f5376e0314610169575b600080fd5b34801561006857600080fd5b50610071610194565b6040518082815260200191505060405180910390f35b34801561009357600080fd5b506100ee600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919291929050505061019a565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012e578082015181840152602081019050610113565b50505050905090810190601f16801561015b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561017557600080fd5b5061017e6101a4565b6040518082815260200191505060405180910390f35b60015481565b6060819050919050565b600054815600a165627a7a72305820115ba7887f229622991be618257401467428000e7f1f8d722064e97eecb3163d0029"

> eth.getTransaction("0x1846135cb9f51ba8ac17e4e59a944e2dd4d4f2b05842df8c9e440c62ebac24da")
{
  blockHash: "0xfc4b4c4355c192491d602c926c441b4127fa7420c7c20e2b5301272356d5a762",
  blockNumber: 4464,
  from: "0x436ef52588b8c2fb1ee14844afe94bb78a4072b7",
  gas: 100000,
  gasPrice: 1000000000,
  hash: "0x1846135cb9f51ba8ac17e4e59a944e2dd4d4f2b05842df8c9e440c62ebac24da",
  input: "0xb8e010de",
  nonce: 34,
  r: "0x99b0508a61ac0bbe19eb1d3241fc50231c38ba4fa4fa5e98804fea0ada985e8f",
  s: "0x2ebd4feb845eb6d1984d8128cddcef3f9bc0a8fda9f1b07b5b715e476f336a1d",
  to: "0xf7db9cdfda80d80a6ae469ad06cc5410548812d3",//合约地址
  transactionIndex: 0,
  v: "0x2a",
  value: 0
}
