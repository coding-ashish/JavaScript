//Object have two declaration method.
//1. Object constructor
//2. Object literals :

const JsUser = {
    name: "Ashish",
    age: 21,
    id: 2415107,
    email: "extensionops@gmail.com"
}

console.log(JsUser.name)
console.log(JsUser["age"])
// console.log(`Hello js User , ${JsUser.name}`)

// JsUser.greeting = function () {
//     console.log(`Hello JsUser, ${this.name}`)
// }

// JsUser.greeting

console.log(JsUser.email)
Object.freeze(JsUser) //this line freezes the object that means we can't change any instance of this object further
JsUser.email = "ashish_ug_24@ei.nits.ac.in"
console.log(JsUser.email)

JsUser.greeting = "Hello everyone my name is Ashish";
console.log(JsUser)