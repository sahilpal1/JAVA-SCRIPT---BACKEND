// // primitive Datatypes 


// // there are 7 types of primitive Datatypes 
// //  String, Number, Boolearn, null, undefined, symbol, BigInt


// const score =100
// const scoreValue = 100.3

// const isLoggedIn = false
// const ousideTemp = null
// let userEmail;


// const id = Symbol('123')
// const anotherId =Symbol('123')

// console.log(id === (anotherId));



// // const BigNumber = 12345678n




// //  (reference) Non-primitive Datatypes

// // there are  3 tyes of Non-primitive Datatypes

// // Array , object , function 

// const heros = ["sakhtiman" , "naagraj" , "doga"]
// let anyobj = {
//     name : "sahil",
//     age : 78,

// }

// const myfunction = function(){
//     console.log("hello world")
// }

// console.log(typeof BigNumber);    // output undefined

// console.log(typeof ousideTemp);   // output  object

// console.log(typeof scoreValue);   // output Number

// console.log(typeof myfunction);   // output function

// console.log(typeof anotherId);    // output symole

// console.log(typeof String);       // output function  

// console.log(typeof Boolean);      // output  function

// console.log(typeof null);        // output object

// console.log(typeof isLoggedIn);  // output Boolean






































// *********************************************** lecture 10 **************************


//  stack(primitive) , heap (Non-primitive )


let myYoutubename = "sahilpaldotcom"

let anothername = myYoutubename
anothername = "chai or code"

console.log(myYoutubename);
console.log(anothername);


let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"

}

let userTwo = userOne

userTwo.email = "sahilpal@gmailcom"

console.log(userOne.email);
console.log(userTwo.email);




