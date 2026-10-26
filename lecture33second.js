// const mynums = [1,2,3]

// const mytotal = mynums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// console.log(mytotal);



// -----arrow function
// const mytotal = mynums.reduce( (acc,currval) => acc+currval,0 

// )

// console.log(mytotal);

const shoppingCart = [
    {
        itemname: "js course",
        price: 2999
    },
    {
        itemname: "c course",
        price: 4000
    },
    {
        itemname: "python course",
        price: 12000
    },
    {
        itemname: "mobile course",
        price: 9999
    }
];

// Using reduce to calculate the total price
const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(`Total Price to Pay: ${pricetopay}`);


// console.log(shoppingCart);
