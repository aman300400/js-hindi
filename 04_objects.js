//const tinderUser = new Object()  ./// but this is a single ton object
// const tinderUser ={}  // this is a non single ton object 

// // both of these will give same output there is a no difference berween them

// tinderUser.id = "123abc"
// tinderUser.name = "aman"
// tinderUser.isloggedin = false

// // console.log(tinderUser) ;// this is used to create an empty object using the object constructor

// const regularUser = {
//   fullname :{
//     userfullname: {
//       firstname: 'aman',
//       lastname: 'kumar'

//     }
//   }
// }

//console.log(regularUser)
//console.log(regularUser.fullname)
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'z',  4: 'y'}

//////////////////////////////////////////////////////////////////////////////////

// const obj3 ={obj1 , obj2} // this is used to create an object using the object literal syntax

//  console.log(obj3); // it can make a nested object  so it creat problem 

 //thats why we cant use this 

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//567888888888888888888888888888888888888888888888888888888888888888888888888888888888888
// const obj3 ={obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2) 
// console.log(obj3);
// this is used to merge two objects into one object using the Object.assign() method
//rt6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
// const obj3 ={ ...obj1 , ...obj2}  // this is used to merge two objects into one object using the spread operator


// console.log(obj3); // spread operator is used to merge two objects into one object


const users = [
  {
    id: 1,
    name: 'aman',
    age: 18,
    email: "aqman@gmail.com"
  },
  {
    id: 2,
    name: 'raman',
    age: 184,
    email: "asman@gmail.com"
  },
  {
    id: 12,
    name: 'ramaman',
    age: 184,
    email: "aaman@gmail.com"
  },
]

users[1].email

51console.log(Object . keys ( tinderUser ) ) ;
52console.log(Object . values ( tinderUser) ) ;
53console.log(Object . entries ( tinderUser) ) ;


console. log ( tinderUser . hasOwnProperty ( ' isLoggedIn' ) ) ;


const course ={
  coursename: "js in hindi ",
price : '999',
courseInstructor: 'aman'
}

course.courseIndtructor

const {courseInstructor} =course
// this is the another way to call the value of the object by using destructuring assignment 
console.log(CourseInstructor);



const navbar = ({ company})
 // this is used to create a function that takes an object as an argument and destructures it to get the value of the object
// and then returns a string that contains the value of the object

navbar ( company = 'aman') // basically this is used in react