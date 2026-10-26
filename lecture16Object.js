// singleton 
// object.create





// object literals
const mysym = Symbol("key1")
const jsuser = {
    name: "sahil",
    "full name":"sahil pal",
    [ mysym] : "mykey1",
    age: 20,
    location :"Jaipur",
    email:"sahilpal@google.com",
    isloggedIn :false,
    lastloginDays:("monday","saturday")
}

console.log(jsuser);
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["mysym"]);
console.log(typeof jsuser.mysym);

jsuser.email = "sahil@chatgtp.com"
// Object.freeze(jsuser)

jsuser.email ="sahil@microsoft.com"
// console.log(jsuser)


jsuser.greeting =function()
{
    console.log(`hello jsuser`);
}


jsuser.greetingTwo =function()
{
    console.log(`hello jsuser,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
