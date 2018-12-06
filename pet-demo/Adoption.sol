pragma solidity ^0.4.10;

//0xaac374b67659f6550c4966950af48154469b99a9
contract Adoption{
    address[16] public adopters;

    // Adopting a pet
    function adopt(uint petId) public returns (uint) {
      require(petId >= 0 && petId <= 15);

      adopters[petId] = msg.sender;

      return petId;
    }

    // Retrieving the adopters
    function getAdopters() view public returns (address[16]) {
      return adopters;
    }
}
