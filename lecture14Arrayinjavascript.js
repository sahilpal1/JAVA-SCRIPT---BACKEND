// // Array

const myArr = [0,1,2,3,4,5]
// const myHeors =["shaktiman", "naagraj"]

// const myArr2 = new Array(1, 2, 3, 4);
// console.log(myArr2[1]); // Outputs the second element of the array

// // console.log(myArray)





// Array metods
// myArr.push(6)  
// myArr.push(7)
// myArr.pop()



// myArr.unshift(9)
// myArr.shift(9)


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(0));



// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);



// slice , slice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)  // output (1,2)

console.log(myn1);
console.log("B",myArr);        // output (0,1,2,3,4,5)



const myn2 = myArr.splice(1,3)
console.log("C ",myArr);        // output (0.4,5)
console.log(myn2);