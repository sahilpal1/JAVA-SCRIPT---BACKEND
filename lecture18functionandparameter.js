function saymyname(){
    console.log("s");
    console.log("a");
    console.log("h");
    console.log("i");
    console.log("l");
}

// saymyname()

// function addTwonumber(numbaer1, number2){
//     console.log(numbaer1+number2);
    
// }
// addTwonumber(4,5)


function addTwonumber(number1, number2) {
    let result = number1 + number2;
    // console.log("sahil");
    // return result;
    return number1 + number2
}




const result = addTwonumber(4,5)
// console.log("Result",result);



function loginUserMessage(username= "sam"){
    if(username== undefined){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("sahil"))
// console.log(loginUserMessage())





function calculatecarprice(val1,val2,...num1){
    return num1

}

// console.log(calculatecarprice(200,400,500,600))


const user = {
    username:"sahil",
    price :199

}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price:2000
})


const myNewArray = [222,444,456,677]

function returnSecondValue(getArray) 
{
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([22,33,44,55,67,77,]));