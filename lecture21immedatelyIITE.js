// Immendiately Invokes Function Expressions (IIFE)



// (function chai(){
//     console.log(`DB CONNECTED`);

// })();

// ( () =>{
//     console.log(`DB CONNECTED TWO ${name}`);
// })('sahil');








(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

((name) => {
    // const name = 'sahil'; // Define the variable 'name'
    console.log(`DB CONNECTED TWO ${name}`);
})('sahil');

