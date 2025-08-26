const name = "aman"
const repoCount =50;

//console.log(name +repoCount+"value"); // this isn old way 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); // this is new way t0  define
// the above is called string interpulation  in this we can do many things on the go  we can also add some methods in it like touppercase

another way to define a String 
==>>const gamename new String ("hitesh")

console.log(gameName.length);
console.log(gamenName.touppercase());// it convert all inn upper case but it does not change the orignal value of string
console.log(gamenName.charAt("2")); IT CHECK konsa character kis position pa haa for example you want to check the position of 2 ind index  in the=is we have to pass number 
console.log(gamenName.indexof("2")); inn this we csn check which character is presemtn an which index
const newsString = gameName.substring(0,4) //const newsString = gameName.substring(start , endno) it include first no but it exclude last no just take example hitesh numbering 012345 it prints hite it exclude 4th number it does not take negative it ignores it and  starts with zero
const anotherString =gameName.slice(-8, 4) it take negative value  

const newsStringOne ="   hitesh   "
console.log(newsStringOne); it does not save space  it prints directly 
console.log(newsStringOne.trim()) // this make the trim removes the starting and ending space and save our space i mean it removes white space from start and end

const url ="hitesh://hitesh.com/hitesh%20choudhary"

console.log(url.replace("%20", "_"))//  // replace("%20", "-") replace 20 with minus
console.log(url.includes("hitesh")) // ya batata ha ya include haa ka nahi in this case it checks hitesh include ha  ka nahi it gives  answer in true or false if available give true and if not it gives false


console.log(gameName.split(-));

/*
example taken from mdn website
const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
 
*/


sting need goood practicing keep practicing string it make yourr grip tighton string
