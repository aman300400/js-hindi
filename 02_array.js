const marvel_characters = ['thor', 'ironman', 'hulk', 'spiderman', 'black widow'];

const dc_characters = ['superman', 'batman','flash','wonderwomwan','green lantern'];
 

 //marvel_characters.push(dc_characters);

// console.log(marvel_characters)
// ;

// const all_heroes = marvel_characters.concat(dc_characters); // for cincatination we have to make ney array to concat  two array
// console.log(all_heroes);


// const all_heroes = [...marvel_characters, ...dc_characters]; // for cincatination we have to make ney array to concat  two array  this is called spread operator

// console.log(all_heroes); // this is the output of spread operator


// const another_array =  [1,2,3,[4,5,4,9] ,7,5,4,[4,56,[5,6,7,88,67]]];

// const real_another = another_array.flat(Infinity)

// console.log(real_another); // this is the output of flat method in array  this is used to flatten the array and make it one dimensional array 
//console.log(Array.isArray("aman")) // this is used to check whether the given value is array or not
//console.log(Array.isArray(another_array)) // this is used to check whether the given value is array or not

//console.log(Array.of(score1,score2,score3));
// this is used to create a new array with the given values and this is also called array of method in array

let score1 = 10;
let score2 = 20;  
let score3 = 30;
let score4 = 40;
let score5 = 50;

console.log(Array.of(score1,score2,score3,score4,score5)); // this is used to create a new array with the given values and this is also called array of method in array