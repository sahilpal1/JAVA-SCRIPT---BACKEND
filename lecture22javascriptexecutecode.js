// let val1 = 10;
// let val2 = 5;

// function addNum(num1, num2) {
//     let total = num1 + num2; // Adds num1 and num2 and stores the result in total
//     return total;            // Returns the total
// }

// let result1 = addNum(val1, val2); // Calls addNum with val1 and val2, storing the result in result1
// let result2 = addNum(10, 2);      // Calls addNum with 10 and 2, storing the result in result2

// console.log(result1); // Outputs: 15
// console.log(result2); // Outputs: 12




function one(){
    console.log("one")
    two()
}

function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}

one()
two()
three()
