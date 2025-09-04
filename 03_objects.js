// singleton
//object creat

// objects literals

// const JsUser ={
//   name: 'aman',
//   'full name': 'aman kumar',
//   mySym : "mykey1",
//   age : 18,
//   email:"aman@google.com",
//   isloggedIn: false,
//   lastLogin: ['monday' ,'friday']
// } 

// console.log(JsUser.email,) // this is used to access the value of the object by using dot notation
// //console.log(JsUser.email);or
//  console.log(JsUser['email']);
  // this is used to access the value of the object by using bracket notation
// console.log(JsUser['full name'])
// console.log(JsUser.mySym) // this is used to access the value of the object by using bracket notation;
 
// const mySymm = Symbol("key11")
// [mySymm]: "mykey11"
// console.log();// complete nahi haa yaa time stam p haa 3:53 please watch  objects ka part haaa...


JsUser.email ="AMAN@GMAIL.COM"
//object.freeze(JsUser) // this is used to make the object immutable and we cannot change the value of the object after using this method 

//freeze hogaya haa chanhe nahi hoogaa

JsUser.email ="hello@hotmail.com"

 JsUser.greetings = function(){
  console.log('Hello JS user');

 }
 console.log(JsUser.greetings());

 
