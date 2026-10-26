const marvel_heros = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// Pushing the entire dc array into marvel_heros
marvel_heros.push(dc);

// console.log(marvel_heros);          // Prints the marvel_heros array, including the dc array as the last element
//  console.log(marvel_heros[3][1]);    // Prints the second element of the dc array, which is "flash"

const allHeros = marvel_heros.concat(dc);
// console.log(allHeros); 

const all_new_heros =[...marvel_heros,...dc]
// console.log(all_new_heros);


const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("sahil"))
console.log(Array.from("sahil"))
console.log(Array.from({name: "sahil"})) //interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array);
console.log(Array.of(score1,score2,score3));