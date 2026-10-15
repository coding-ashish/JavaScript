function LoggedIn(username) {
    return `${username} just logged in.`
}

const login = LoggedIn()

// console.log(login)

//Now what happens if no arguement is passed to the function?

// console.log(login) // it is printing : undefined just logged in.

//So we can check before returning the value that if the arguement is passed to the function or not by using if else statement.
//or we can keep a default value of the arguement. ; 

function add(num1 = 3, num2 = 5) {
    return num1 + num2
}

console.log(add())


//Now what to do to use unknown number of arguements in a function? 
// We can use rest operator. Rest operator and spread operator are same but they are called so based on the siy=tuation they are used in.

function addCartValue(...num) {
    return num
}

console.log(addCartValue(100, 200, 300, 454, 765)); // Here we are getting all the values passed as an arguement in the form of an array. Now by using loop we can add these values easily.