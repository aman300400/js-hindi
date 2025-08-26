//   Data

//   let myDate = new Date()
//   console.log(myDate.toString());
//   console.log(myDate.toISOString());
//   console.log(myDate.toDateString());
//   console.log(myDate.toTimeString());
//   console.log(myDate.toJSON());

// /* here are the expectex outputs of this 
// Fri Apr 04 2025 19:08:24 GMT+0530 (India Standard Time)
// 2025-04-04T13:38:24.847Z
// Fri Apr 04 2025
// 19:08:24 GMT+0530 (India Standard Time)
// 2025-04-04T13:38:24.847Z */

// console.log(typeof myDate);  // it is a very frequent interview question  the question is what is the type of date and the output of the date is object   date is an object in java script
   
let myCreatedDate =new Date (2025,3,16) // months starts with zero 0 will be january 1 will be february and so on
console.log(myCreatedDate.toDateString());
// its output Wed Apr 16 2025

let myCreatedDatee =new Date (2025,3,4,7,21) date ma bhi kahi month  array hotaa ha aur kahi  normal one 1 sa start hootaaahahahah
console.log(myCreatedDatee.toLocaleString()); // 4/4/2025, 7:21:00 am date when i was learning and answer of local string input

let myCreatedDaatee =new Date ("2025-03-04") // we can also gives dates in mm/dd/yyyy
console.log(myCreatedDaatee.toLocaleString()); // this is the output 3/4/2025, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp) // it gives output in miillisecond

console.log(myTimeStamp)
console.log(myCreatedDate.getTime()); /// it also givesin millisecond have to compare

console.log(date.now()); //ya exact aabhi ki date daaagaaa wo bhi mili second maaa  hi daagaa

 console.log(Math.floor(Date.now()/1000)) //for easily calculation of date it gives in millisecond without any decimal value which is easily caculatable 

 let newDate= newDate();
 console.log(newDate.);//we can get date /get hours /get full year // get millisecooond//get milliseconds etc ans many more
 console.log(newDate.getMonth()); // and many more like this 

//  important date method

newDate.toLocaleString("default",{
    weekday:"long",
    timeZone:'24.847Z'// or many more
})

this topic is slightly complicated practice one oe two times