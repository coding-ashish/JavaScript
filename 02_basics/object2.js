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

// de-structuring objects

const courses = {
    CourseInstructor: "Hitesh",
    Price: 100,
    Coursename: "Js In hindi"
}

//now te de-structuring part

const { Price: P } = courses //here we deconstructed the Price and renamed it to P fir easiness.
console.log(P);

// Json In js


// this is Json Format, similar to objects but a slight difference is that it is declared with its keys also in strings
// {
//     "name" : "Ashish",
//     "id" : 2415107,
//     "isloggedIn" : false
// }

//We recieve data from APIs in the format of array of objects
[
    {},
    {},
    {}
]
//from there we access individual values we need

//there is a website named json formatter where we can easily understand any json data