pragma solidity ^0.4.0;

//contract关键字：合约申明
//和Java、PHP中的class类似
//此处是申明一个名为Hello的合约
contract Hello {

    //public: 函数访问属性(后续文章为详细阐述)
    //returns (string): 定义返回值类型为string

    uint public _c;
    uint public _b;

    constructor(uint a,uint b) public{
        _c = a;
        _b = b;
    }

    function say(string name) public pure returns (string) {
        return name;
    }

    function set() public{
      _c += 2;
    }
}
