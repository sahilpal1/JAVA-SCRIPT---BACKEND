const userEmail =[]

if(userEmail){
    console.log("Got user email");

}else {
    console.log("Don't have user email");
}



// falsy values

// false , 0 ,-0 ,BigInt , On, "", null ,undefined, NaN

// truthy values

// "0" , 'false' , " " , [] , {} , function(){} 

// if (userEmail.length === 0)
// {
//     console.log("Array is empty");
// }


const emptyObj= {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}






// ----------
// false == 0
// true

// true ==0
// false

// false ==''
// true

// 0 == ''
// true


// ------ Nullish coalescing operator (??): null undefined

// let val1;
// // val1 =5 ?? 10
// // val1 =null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);


//  ---------------terniary operater

// condition ? true :false

const iceTeaprice =100
iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80")