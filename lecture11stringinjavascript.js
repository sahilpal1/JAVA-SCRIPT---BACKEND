const name = "sahil";
const repocount =50;

console.log(name);
console.log(repocount);



// console.log(name + repo count + "value");
console.log(`hello my nameis ${name} and my repo is ${repocount}`);


const gameName = new String('sahil-chh')

console.log(gameName[0]);
console.log(gameName.__proto__);



console.log(gameName.length); 
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,2)
console.log(newString);


const anotherString = gameName.slice(-8 , 4)
console.log(anotherString);


const newStringOne = "   sahil   "
console.log(newStringOne);
console.log(newStringOne.trim());





const url = "https:sahil.com/sahil%20pal"

console.log(url.replace('%20', '-'))
console.log(url.includes('sunday'))


console.log(gameName.split('-'))



















// let gameName = "exampleGame";

// console.log(gameName[0]);            // Outputs the first character of the string
// console.log(Object.getPrototypeOf(gameName)); // Outputs the prototype of the string object

// console.log(gameName.length);        // Outputs the length of the string
// console.log(gameName.toUpperCase()); // Converts the string to uppercase

