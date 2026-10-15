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