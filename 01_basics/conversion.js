let score = 44
console.log(typeof score)
let stringScore = "44ab"
console.log(typeof stringScore)

console.log(typeof Number(stringScore))
console.log(Number(stringScore))

/*
conversions : 
    "44" -> 44 (a number)
    "44abc" -> NaN (not a number) but having type equal to Number
    1 -> True
    0 -> false

    true -> 1
    false -> 0

    "" -> false
    "abc" -> true
*/