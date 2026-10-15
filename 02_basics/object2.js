//Constructor method to declare an object
const TinderUser = new Object() // constructor method //singleton object

//we can use nested objects
const obj1 = {
    name: {
        firstname: "Ashish",
        lastname: "Upadhyay"
    },
    Id: 2415107,
    isLoggedIn: true
}

// console.log(obj1)

const obj2 = {
    1: "a",
    2: "b"
}

const obj3 = {
    3: "a",
    4: "b"
}

// const obj4 = { obj2, obj3 }
// console.log(obj4);

// This is one way of merginf two objects
// Object.assign(obj2, obj3)

//another way of merinf objects is by using spread operator
const obj4 = { ...obj2, ...obj3 }
console.log(obj4);