// ***************** DATE*************************************
// let myDate = new Date();

// console.log(myDate.toString()); // Corrected 'tostring' to 'toString'
// console.log(myDate.toDateString()); // Corrected 'toDatestring' to 'toDateString'
// console.log(myDate.toLocaleString()); // Corrected 'tolocalstring' to 'toLocaleString'
// console.log(typeof myDate); // Removed the function call 'myDate()' to just check the type of myDate


// let myCreatedDate =new Date(2023 , 0 , 24)
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 24, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());





// let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString());

// let myTimestamp = Date.now();

// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now() / 1000);

// console.log(Math.floor(Date.now() / 1000));


let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());



// `${newDate.get Day()} and the time`
newDate.toLocaleDateString('default',{
    weekday:"long"
})