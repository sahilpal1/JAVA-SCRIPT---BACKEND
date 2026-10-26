// const user ={
//     username:"sahil",
//     price:9999,

//     welcomemeassage:function(){
//         console.log(`${this.username}, welcome to website `);
//         // console.log(this);
//     }

// }

// user.welcomemeassage()
// user.username = "sam"
// user.welcomemeassage()

// console.log(this);

// function chai(){
//     let username = "sahil"
//     console.log(this.username);
// }
// chai()



// const chai = function (){
//     let username = "sahil"
//     console.log(this.username);

// }
// ---------------------arrow function-------

const chai =  ()=>{
    let username = "sahil"
    console.log(this);


}
// chai()



// -------basic arrow function and implict return 
// const addtwo = (num1 , num2)=> {
//     return num1 +num2

// }
// console.log(addtwo(3,4))



// const addtwo = (num1 , num2) =>  num1 + num2

// const addtwo = (num1 , num2) =>  (num1 + num2)

const addtwo = (num1 , num2) => ({username:"sahil"})

console.log(addtwo(3, 4))


// const myArray =[2,3,4,5,6]
// myArray.forEach(() =>{})


    const myArray = [2, 3, 4, 5, 6];
    myArray.forEach((element) => {
        console.log(element);
    });

    // const myArray = [2, 3, 4, 5, 6];
    // const squaredArray = [];
    // myArray.forEach((element) => {
    //     squaredArray.push(element * element);
    // });
    // console.log(squaredArray);
    