//this keyword :
const obj = {
    name: "Ashish",
    id: 107,
    WelcomeMessage: function () {
        console.log(`${this.name}, Welcome to my WebSite`);
    }
}

// obj.name = "Rishav"

// console.log(obj.WelcomeMessage());

console.log(this);

const variable = function () {
    console.log(this);
}

console.log(variable());

//+++++++++++ arrow function +++++++++++\

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addtwo = (num1, num2) => (num1 + num2) //in case of only one liner return statement we can right it like this with arrow function.

console.log(addtwo(1, 5)) 