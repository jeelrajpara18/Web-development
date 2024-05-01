// 1.Write the syntax for declaring a JavaScript function called sayHello that doesn't take any parameters and doesn't return any value.
// function sayHello(){
//     console.log("Hello");
// }
// sayHello();

//2.What is the syntax for declaring a JavaScript function called calculateSum that takes two parameters num1 and num2, and returns their sum?
//i. with argument and return
// function calculateSum(num1,num2){
//         return num1+num2;
// }
// console.log(calculateSum(5,7));

//ii.without argument with return
// function calculateSum(){
//     const num1=5;
//     const num2=7;
//     return num1+num2;
// }
// const result=calculateSum();
// console.log(result);

//iii.with argument but without return type
// function calculateSum(num1,num2){
//     const sum=num1+num2;
//     console.log(sum);
// }
// calculateSum(5,7);

//iv.without return type and argument
// function calculateSum(){
//     const num1=5;
//     const num2=7;
//     const sum=num1+num2;
//     console.log(sum);
// }
// calculateSum();


//3.Create a function called printArray that takes an array called arr as a parameter and prints the array. Write the syntax for this function.
// function printArray(arr){
//         console.log(arr);
// }
// const myArray=[1,2,3,4,5];
// printArray(myArray);

// 4.Write the syntax for declaring an anonymous JavaScript function and assigning it to a variable called multiply that takes two parameters a and b, and returns their multiplication.
// const multiply=(a,b)=>a*b;
// console.log(multiply(5,7));

// 5.What is the syntax for calling a function named myFunction that doesn't take any parameters?
// function myFunction(){
//     console.log("hello world");
// }
// myFunction();

// 6.Create a JavaScript arrow function called squareNumber that takes a parameter num and returns the square of that number. Write the syntax for this arrow function.
// const squareNumber=(num)=>num*num;
// console.log(squareNumber(5));

// 7.Write the syntax for declaring a JavaScript function called getFullName that takes two parameters firstName and lastName, and returns the full name as a string.
// function getFullName(firstName,lastName){
//         return firstName+lastName;
// }
// console.log(getFullName("jeel"," Rajpara"));

// 8.What is the syntax for declaring a JavaScript function called calculateArea that takes two parameters length and width, and returns the area of a rectangle?
// function calculateArea(length,width){
//          return length*width;
// }
// console.log(calculateArea(2,4));

//9.Write the syntax for declaring a JavaScript function called isEven that takes a single parameter num and returns true if the number is even, and false otherwise.
// function isEven(num) {
//     if (num % 2 == 0) {
//         return true;
//     }
//     else {
//         return "false otherwise";
//     }

// }
// console.log(isEven(10));

//10.Write a function that takes three parameters and returns the maximum number of three.

//with if...else
// function maxNum(num1,num2,num3){
//     if(num1 >= num2 && num1 >= num3) {
//        return max = num1;
//     }
//     else if (num2 >= num1 && num2 >= num3) {
//         return max = num2;
//     }
//     else {
//        return max = num3;
//     }
// }
// console.log(maxNum(10,20,25));

//with teranry operator
// function maxNum(num1,num2,num3){
//    return max=((num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3));
// }
// console.log(maxNum(10,20,25));

//with argument without return type
// function maxNum(num1,num2,num3){
//       if(num1>=num2 && num1>=num3){
//         console.log(num1);
//       }
//       else if (num2 >= num1 && num2 >= num3) {
//         console.log(num2)
//       }
//       else {
//         console.log(num3);
//       }
// }
// maxNum(10,20,30);

// with teranry operator
// function maxNum(num1,num2,num3){
//     console.log(((num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3)));
// }
// (maxNum(100,200,300));

//without argument with return
// function maxNum(){
//      const num1=10;
//      const num2=100;
//      const num3=1000;
//      if(num1 >= num2 && num1 >= num3) {
//             return max = num1;
//         }
//     else if (num2 >= num1 && num2 >= num3) {
//             return max = num2;
//         }
//     else {
//             return max = num3;
//     }
// }
// console.log(maxNum());

//ternary operator
// function maxNum(){
//     const num1=10;
//     const num2=100;
//     const num3=1000;
//     return max=((num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3));
// }
// console.log(maxNum());

//without argument without return
// function maxNum(){
//     const num1=100;
//     const num2=200;
//     const num3=300;
//      if(num1>=num2 && num1>=num3){
//         console.log(num1);
//       }
//       else if (num2 >= num1 && num2 >= num3) {
//         console.log(num2)
//       }
//       else {
//         console.log(num3);
//       }
// }
// maxNum();

//ternary operator
// function maxNum(){
//         const num1=10;
//         const num2=20;
//         const num3=30;
//         console.log(((num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3)));
// }
// maxNum();


// 11.Create a JavaScript function called calculatePrice that takes a two parameter price, discount and returns discounted price. 	(defaultDiscount = 10%)
// Write the syntax for this arrow function.
// Write the syntax for normal function.

// function calculatePrice(price,discount=10){
//       return price-((price*discount)/100);
// }
// let result=calculatePrice(50);
// console.log(result);

// const calculatePrice=(price,discount=10)=>price-((price*discount)/100);
// let result=calculatePrice(50);
// console.log(result);
 

//12 que repeated


//13.What is the syntax for declaring a JavaScript function called calculateMultiply that takes two parameters num1 and num2, and returns their multiplication? (make sure that never give an error if i passed anything) (if not pass anything then return 1)
// With normal function (write all four types of functions as we discussed in session)
// With arrow function (write all four types of functions as we discussed in session)



//with normal function
//with argument and return
// function calculateMultiply(num1,num2){
//     if(num1 !=undefined && num2 !==undefined){
//         return num1*num2;
//     }
//     else{
//         return 1;
//     }
// }
// console.log(calculateMultiply(10,20));

//with argument no return
// function calculateMultiply(num1,num2){
//     if(num1 !=undefined && num2 !==undefined){
//         const multiply=num1*num2;
//         console.log(multiply);
//     }
//     else{
//         return 1;
//     }
// }
// (calculateMultiply(10,20));

//without argument with return
// function calculateMultiply(){
//     const num1=10;
//     const num2=20;
//     if(num1!==undefined && num2!==undefined){
//         return num1*num2;
//     }
//     else{
//         return 1;
//     }
// }
// console.log(calculateMultiply());

//without argument and return type
// function calculateMultiply(){
//     const num1=10;
//     const num2=100;
//     if(num1 !==undefined&& num2!==undefined){
//          const multiply=num1*num2;     
//          console.log(multiply);
//     }
//     else{
//         return 1;
//     }
// }
// calculateMultiply();

//with arrow function
// with argument with return
// const calculateMultiply=(num1,num2)=>{
//     if(num1!==undefined && num2!==undefined){
//         return num1*num2;
//     }
//     else{
//         return 1;
//     }
// }
// console.log(calculateMultiply());


//without argument with return
// const calculateMultiply=()=>{
//     const num1=10;
//     const num2=20;
//       if(num1!==undefined && num2!==undefined){
//         return num1*num2;
//       }
//       else{
//         return 1;
//       }
// }
// console.log(calculateMultiply());

//with argument without return
// const calculateMultiply = (num1, num2) => {
//     if (num1 !== undefined && num2 !== undefined) {
//         const multiply = num1 * num2;
//         console.log(multiply);
//     }
//     else {
//         return 1;
//     }
// }
// calculateMultiply(10, 20);

//without argument without return
// const calculateMultiply=()=>{
//     const num1=10;
//     const num2=20;
//     if(num1!==undefined&&num2!==undefined){
//         const multiply=num1*num2;
//         console.log(multiply);
//     }
//     else{
//         return 1;
//     }
// }
// calculateMultiply();

//14.Write the syntax for declaring a JavaScript function called greet that takes parameters and doesn't return any value. (if not passed an argument then prints ‘Anonymous’)
// function greet(name){
//      if(name==undefined){
//         console.log("anonymous");
//      }
//      else{
//         console.log("greetings")
//      }
// }
// greet();

//15.Write the syntax for declaring a JavaScript function called exponent that takes parameters and returns an exponent of passed parameters. (if not passed an argument then returns power 2)

// function exponent(num){
//       if(num!==undefined) {
//           return num**num;
//       }
//       else{
//         return "power 2";
//       }
// }
// console.log(exponent());

