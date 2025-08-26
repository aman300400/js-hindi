//primitive

// 7 types : string .number,booleam, null, undefined ,symbol, bogint
1.42.00
const score =100;
const scorValue=100.3

const isloggedin =false
constsidetemp=null
let useremail;

const id =symbol("12")
const anotherid =Symbol("123")
console.log(id=== anotherId);
constbigNumbers=2345678987654567898765n //agar iska aaga n laga data ha to ya big int ban jata haaai

//reference (non primitive)

//array , object, functions


1.48 time stamp

const heros =["shaktiman","naagraj","doga"] 
let myObj ={
    name:"aman",
    age:22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof BigInt);// for example you want to check the data type of any variable you have to use this


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof want to check type of visiit this website https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// Description
// The following table summarizes the possible return values of typeof. For more information about types and primitives, see also the JavaScript data structure page.
//$$$$$$$$$$$$$$$$$$$$$$return types&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Type     	Result
// Undefined	"undefined"
// Null	"object" (reason)
// Boolean	"boolean"
// Number	"number"
// BigInt	"bigint"
// String	"string"
// Symbol	"symbol"
// Function (implements [[Call]] in ECMA-262 terms; classes are functions as well)	"function"
// Any other object	"object"
// This list of values is exhaustive. No spec-compliant engines are reported to produce (or had historically produced) values other than those listed.

//++++++++++++++++++memorys++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // memory are of two types  1 stack 2 heap

//stack (primitive )stack or premitive memory ma hama copy milta haaa ,
// ,heap (non primitive)//jabbhi memory heap kaa aandaar define hoti ha  to hama waha milta haa refe rence orignal vaalue kaa  joo bhi change hoga wo orignal value maa hoogaaa

//for ex let myyoutubename= "amankumar"
let anothername = myYoutubename
anothername ="chaiaurcode"

console.log(myYoutubename); // it gives aman kumar
console.log(anothername); // it print chai aur code // copy ka aandar change karna pa orignal value change nahi hooogiii

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email ="hitesh@google.com"

console.log(userOne.email);// both gives same value hitesh@google.com
console.log(userTwo.email); // both gives same value hitesh@google.com