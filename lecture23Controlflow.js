// --------if----------
const isuserloggedIn =true
const temperature =41


// if(temperature ===40 ){
//     console.log("less than 50");
// }
// else{
// console.log("temperature is greater than 50");
// }
// console.log("Executed");
// // 2 == "2"
// 2<=2
// 3 != 2
// <,>,<=,>=,== ,!=  ,=== ,!==
// if(false){
    
// }

// -----scope ----------
const score =200
//  --------------------const used program -------
// if( score > 100){   
//     const power ="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

//  --------------------var used program -------
// if( score > 100){
//     var power ="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

//  --------------------let used program -------
if( score > 100){
    let power ="fly"
    // console.log(`user power: ${power}`);
}
// console.log(`user power: ${power}`);



// -----shorthandnotation-----
// const balance =1000

// if (balance < 500){
//     console.log("less than");
// }else if(balance <750){
//     console.log("less tahn 750");
// }
// else if(balance < 900){
//     console.log("less than 750");

// }else{
//     console.log("less than 1200");
// }


// if(balance > 500) console.log("test");   // implict scope

// if(balance > 500) console.log("test"),   // multiple line code
// console.log("test2");




const userLoggedIn = true
const debitcard =true
const loggedInFromGoogle =false
const loggedInFrommail =true

if(userLoggedIn && debitcard && 2==3)
{
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFrommail){
    console.log("user looged in");
}