pragma solidity ^0.6.0;

contract Counter{
    uint count; //unsigned integer data type, it cant be negative

    constructor() public {
        //code in this special function runs only once
        count = 0;
    }

    function getCount() public view returns(uint) {
        return count;
    }

    function incrementCount() public {
        count = count + 1;
    }
}
