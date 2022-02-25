/* IMPORTANT boolean values
function welcomeToBooleans() {
    return false; // true is on and false is off
} */

// IMPORTANT IF statements
function ifelseStatements(){
    if(5000 > 6700){
        return "Yes it is";
    }
    return "No its not";   // this will be the output
}
console.log(ifelseStatements());

function testEqual(val){
    if(val == 10){
        return "Yes it is"; // this will be the output
    }
    return "No its not";   
}
console.log(testEqual(10));

// IMPORTANT Strict Equal to operator
function testEqual(val){
    if(val === 10){
        return "Yes it is"; 
    }
    return "No its not";    // this will be the output because we passed a string 10 and not number 10
}
console.log(testEqual('10'));

/* NOTES If 10=="10" normal equality operator will turn it into number data type
but 10 === "10" will return false as its strict equality operator 
inequality operator != and strict inequality operator !== (it checks the strings too)*/

