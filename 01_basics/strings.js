const gameName = "Ashish-Upadhyay-Senior-SDE"
const name = "Ashish"
const id = 2415107

//we use backticks
//similar to %d and %s in c
console.log(`My name is ${name} and my scholar id is ${id}`)

//If we notice we will know that the string is an object with key value pair here for key 0 value is A and for key 1 value is s and so on
console.log(gameName[0])

//We have so many methods in strings of javascript and to learn strings of javascript is a very big part
console.log(gameName.split('-')) // splits the string into an array based on the consition provided to the split method
const newString = gameName.slice(0, 4)
const anotherString = gameName.substring(0, 4)
console.log(newString)

const NewStringOne = "     Ashish    " //Removes the extra blank spaces in starting and ending
console.log(NewStringOne.trim())