let score =33;
console.log(typeof score); //way 1 to check typeof
console.log(typeof (score)); //way two to check type of


let valueInNumber = Number (score)
console. log (typeof valueInNumber) ; /// it chsnge its type
console.log (valueInNumber);//  it gives output as NaN means not a number  so checlk wisely with precutions

// "33" => 33
// "33abc"=> NaN
// true => 1 ; , false => 0  

let isLoggedIn = true;

let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn );

// 1=> true ; 0 => false
//""=> false
//"aman"=>true;

let someNumbers=33;
let stringNumber = String(someNumber)/// gives 33
console.log(stringNumber); // gives 33
console.log(typeof stringNumber);// gives string



//************************************OPERATIONS**************************************************************************************************************** */

let value  =3;
let negValue=-value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**2);
// console.log(2%2); more use in cryptography amd algorithms

let str1 ="hello"
let str2 = "  aman "
let str3 = str1+str2;
console.log(str1+str2)

// this tye of thing will creat problem 

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);// in this it print 122 which is totally unpredictable
console.log(1+2+"2"); // yaha pa ya hama 32 daga which is pretty expected as per me

console.log(true);// output 1 hogaaa

console.log(+true);// it gives 1
console.log(+"") // it gives  0

let num1, num2, num3
num1=num2=num3=2+2;

let gamecounter =100;
gamecounter++;// read pre fix and postfix in details on mdn 
console.log(gamecounter)


