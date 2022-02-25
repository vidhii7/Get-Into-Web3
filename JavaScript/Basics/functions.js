// Explanation of Global Scope variable
var myGlobal = 10; //global variable
function fun1() {
  oopsGlobal = 5; // since we don't use var keyword here it automatically becomes global
  // adding var makes it a local scope variable and its not counted
}
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined"){
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined"){
    output += "oopsGlobal: " + myGlobal;
  }
  console.log(output);
}
fun1();
fun2(); 

// Explaining local scope variable
function myLocalScope(){
    var myVar = 10;
    console.log(myVar);
}
myLocalScope();
console.log(myVar); 

// IMPORTANT It is possible to have same names for globala nd local variables then global takes over local variable 
var outerWear ="Tshirt";
function myOutfit(){
    var outerWear = "Hoodie";
    return outerWear;
}
console.log(myOutfit()); // local variable is given preference
console.log(outerWear); // global variable is given preference

// IMPORTANT return a value with return statement 
function minusSeven(num){
    return num - 7;
}
console.log(minusSeven(90)); 

// IMPORTANT undefined value returned from a function
var sum = 0;
function addFive(){
    sum += 5;
}
//no output 

// IMPORTANT Assignment with a returned value
var changed = 0;
function change(num){
    return (num + 5) / 3;
}
changed = change(10);
console.log(changed); 

// IMPORTANT Stand In Line (Implementing queues ds)
function nextInLine(arr, item){
  arr.push(item);         // adds 6 
  return arr.shift(item); // removes 1
}
var testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));