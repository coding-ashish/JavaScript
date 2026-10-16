// For of , forEach loops are higher order loops mainly used for array,strings and maps

const myArr = [1, 2, 3, 4, 5, 6]

//for off loop
// for (nums of myArr) {
//     console.log(nums);
// }


//forEach loop 
// myArr.forEach((nums) => {
//     console.log(nums);
// })

//There is a limitation of forEach loop that it does'nt return any value
//In case if we want some retyurn value based on some condition then we can use filter method
// const newArr = myArr.filter((num) => num > 3)
// console.log(newArr);

// map method for array : mopdifies the value of array
// map with chaining :-
const newArr1 = myArr.map((num) => num * 10).map((num) => num * 10)
console.log(newArr1);