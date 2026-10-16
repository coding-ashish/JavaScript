//IIFE -> immediately invoked function expression

//Somtimes the global scopes or any other expressons can pollute function thats why we declare IIFE which can't be polluted by global scope

//Declaring noral function
chai()
function chai() {
    console.log("Database connected");
}

//Named IIFE without an arguement
(function chai1() {
    console.log("Databse connected 2");
})(); // Remember to put a semicolon to end an IIFE to start another IIFE

//UnNamed function with an arguemet passed
((username) => {
    console.log(`Database connected to ${username}`);
})("Ashish")