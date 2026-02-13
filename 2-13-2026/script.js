// Learning Functions
// important array methods

// Foreach method
// let arr = [ 2,5,3,8,9];

// arr.forEach( function Square(val){

//     console.log(val * 2 )
// });

// arr.forEach((val) => {
//     console.log(val * val  )
// });

// map method
// let newArr = arr.map((val)=> {
// return val * val
// });
// console.log(newArr); // map returns a new array

// console.log(arr) //this console is show that the original arr is same

// filter method
// let newArr = arr.filter((val)=>{

//     return val % 2 !== 0
// })
// console.log(newArr)

// reduce method
// let arr = [34,56,78,30,23]

// let newArr = arr.reduce((res,curr)=>{

//     return res + curr
// })
// console.log(newArr)

// Practice Questions

// let arr = [95,87,45,99,93,50]

// let newArr = arr.filter((val)=>{
//     return val > 90
// })
// console.log(newArr)

// let n = prompt("enter a number")
// let arr = []

// for (i = 1; i <=n; i++){
//     arr [i-1] = i;
// }
// console.log(arr)

// let newArr = arr.reduce((pre,curr)=>{

//     return pre + curr
// })
// console.log("sum of arr=>",newArr)

// let secArr = arr.reduce((pre,curr)=>{

//     return pre * curr
// })
// console.log("factorial of arr =>",secArr)

// let arr = [2,5,20,12,14]

// let newArr = arr.filter((val) =>{

//     return val > 10 * val
// })
// console.log(newArr)
// let nums = [12, 5, 8, 130, 44];

// let result = nums.filter((val) => val > 10).map((val) => val * 2);

// console.log(result);
// let cart = [200, 150, 300, 100]

// let reduceMethod = cart.reduce((pre, curr)=>{
//     return pre + curr
// })
// console.log(reduceMethod)

// let students = [
//   {name: "Ali", marks: 85},
//   {name: "Sara", marks: 92},
//   {name: "Ahmed", marks: 70}
// ]
// let topper = students.filter((val)=>{

//     val > 90
// })
// console.log(topper)

// let ages = [16, 22, 18, 14]

// let hasMinor = ages.some((age) => age < 18)
// let allAdults = ages.every((age) => age >= 18)

// console.log("Any minor?", hasMinor)
// console.log("All adults?", allAdults)

// mastering in methods

// let nums = [5,12,8,20,3]

// let result = nums.filter((val)=> val > 10 ).map((val)=> val ** 2);

// console.log(result)

// let arr = [5,99,12,45]

// let max = arr.reduce((prev,curr)=>{
//     return curr > prev ? curr : prev
// })

// console.log(max)
// let arr = [10, 20, 30]

// let sum = arr.reduce((prev, curr) => {
//     console.log("Prev:", prev, "Curr:", curr)
//     return prev + curr
// })

// console.log("Sum =", sum)

// let arr = [10, 20, 30]

// let sum = arr.reduce((prev, curr) => {
//     console.log("Prev:", prev, "Curr:", curr)
//     return prev + curr
// }, 5)   // initial value = 5

// console.log("Sum =", sum)
//  let arr = [10,15,20,25,30]

// let sumEven = arr.reduce((prev,curr)=>{
//     if(curr % 2 === 0){
//         return prev + curr
//     }
//     return prev
// },0)

// console.log(sumEven)
// let arr = [10,15,20,25,30]

// let sumEven = arr.reduce((prev,curr)=>{
//     if(curr % 2 === 0){
//         return prev + curr
//     }
//     return prev
// },0)

// console.log(sumEven)

// let arr = [5,10,15,20]
// let double = arr.map((val)=>{
//    return val ** 2
// })
// console.log(double)

// let fruits = ["apple","banana","mango"]

// let filtering = fruits.filter((val)=>{
//  return   val.includes("a")
// })
// console.log(filtering)

// let nums = [10,15,20,25,30]

// let num = nums.filter((val)=>{
//    return val > 18;
// })
// console.log(num)

// let nums = [5, 12, 8, 130, 44];
// let filterMap = nums.filter((val) => val > 10).map((val) => val * 2);
// console.log(filterMap)

let nums = [18,22,15,30]
let greaterNum = nums.filter((val)=>{
    return val > 18
}) 
console.log(greaterNum)