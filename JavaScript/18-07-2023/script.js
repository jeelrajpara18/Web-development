// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [
//     { id: 10, name: 'xyz' },
//     { id: 5, name: 'xyz' },
//     { id: 2, name: 'something' },
//     { id: 50, name: 'abc' },
//     { id: 110, name: 'jcas' },
// ]
// //write a function displaying the id that is present in both arr1 and arr2
// function displayingId(arr1,arr2){
//     let result = arr2.filter((value)=>arr1.includes(value.id));
//     return result;
// }
// console.log(displayingId(arr1,arr2))

//write a function that only gives the name of the id that is present in the arr2 and arr1
// function displayingName(arr1,arr2){
//        let result = arr2.filter((value)=>arr1.includes(value.id)).map((value)=>value.name);
//        return result;
// }
// console.log(displayingName(arr1,arr2))

// write a function displaying the id that is not included in array 1
// function idNotPresent(arr1,arr2){
//     let result = arr2.reduce((accu,cur)=>{
//         if(!arr1.includes(cur.id)){
//             accu.push(cur)
//         }
//         return accu;
//     },[])
//     return result;
// }
// console.log(idNotPresent(arr1,arr2))

// remove duplicate id and print all the id's in one array
// function removeDuplicate(arr1, arr2) {
//     let combine = arr1.concat(arr2);
//     let result = combine.reduce((accu, cur) => {
//         if (!accu.find((item) => item.id === cur.id)) {
//             accu.push(cur);
//         }
//         return accu;
//     }, []);
//     return result;
// }
// console.log(removeDuplicate(arr1, arr2))  //doubt

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// function filterDuplicate(numbers) {
//     let result = numbers.reduce((accu, cur) => {
//         if (!accu.includes(cur)) {
//             accu.push(cur)
//         }
//         return accu;
//     }, [])
//     return result;
// }
// console.log(filterDuplicate(numbers)) //[ 1 , 2 , 3 , 4 , 5 ]

// const people = [
//     { name: 'Alice', age: 18 },
//     { name: 'Bob', age: 20 },
//     { name: 'Charlie', age: 19 },
//     { name: 'David', age: 21 },
//     { name: 'Aryan', age: 21 }
// ];
// function findPeople(people){
//     let result = people.findIndex((value)=> value.name.includes('A') && value.age>20)
//     return result;
// }
// console.log(findPeople(people))

//--------------------------------------------scope------------------------------------------//
// let a = 3;
// function abc(){
//     a=6;
// }
// console.log(a) //3
// abc()
// console.log(a) //6

// let a = 'Hello';
// function abc() {
//     let b = "World";
//     console.log(a + b)
// }
// abc()
// console.log(a + b) //error ...b is local variable so cannot be accessed outside the function

// let a = "Hello";
// function abc() {
//     let b = 'World';
//     console.log(a + ' ' + b);
//     if (b === "World") {
//         let c = "heloo"
//         console.log(a + ' ' + b + ' ' + c);
//     }
//     console.log(a + '' + b + ' ' + c)
// }
// abc()

// var a = 4;
// function abc() {
//     console.log(a);
//     var a = 8;
// }
// abc()  //hoisting plays role and hence the output is undefined
// in memory allocation the variables are undefined first and then value is provided

// let friend = "Jennifer";
// function getFriend() {
//     console.log(friend);

//     let enemy = "Peter";
//     return function getEnemy() {
//         console.log(enemy);
//     };
// }
// getFriend();

// function findFriend() {
//     let name = "Timmy";
//     let friends = ["Kate", "Tom", "Harry"];
//     return friends;
// }

//   function findFamily() {
//     let name = "Peter";
//     let friends = ["Jimmy", "Jill", "Beth"];
//     return name;
// }
// console.log(findFamily())
// console.log(findFriend())

// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
// }
// foo();
// console.log(typeof a) //undefined
// console.log(typeof b) //number
//here b is accidently created as global variable and a is local variable

//-------------------------------------------------function--------------------------------------------//
// What is the syntax for declaring a JavaScript function called calculateSum that takes two parameters num1 and num2, and returns their sum?
// with argument and return type
// function addNum(num1,num2){
//     return num1 + num2;
// }
// console.log(addNum(10,12))

//with argument without return
// function addNum(num1,num2){
//     let sum = num1 + num2;
//     console.log(sum);
// }
// addNum(12,34)

//without argument with return
// function addNum(){
//     let a = 12;
//     let b = 34;
//     return a+b;
// }
// console.log(addNum())

//without argument and return
// function addNum() {
//     let a = 12;
//     let b = 34;
//     let sum = a + b;
//     console.log(sum);
// }
// addNum()

// Write a function that takes three parameters and returns the maximum number of three.(use ternary operator and if..else as well) (Also make all four types of function as we discussed in session)

// if..else (with argument and return)
// function maximumNum(num1, num2, num3) {
//     if (num2 > num1 && num1 > num3) {
//         return num1;
//     }
//     else if (num2 > num3) {
//         return num2;
//     }
//     else {
//         return num3;
//     }
// }
// console.log(maximumNum(1, 2, 3));

//ternary operator
// function maximumNum(num1,num2,num3){
//     return ((num1>num2)?((num1>num3)?num1:num3):((num2>num3)?num2:num3))
// }
// console.log(maximumNum(100,20,30))

//without argument with return
//if..else
// function maximumNum(){
//     let a = 12;
//     let b = 2;
//     let c = 33;
//     if(a>b && a>c){
//         return a;
//     }
//     else if(b>c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }
// console.log(maximumNum())

//ternary
// function maximumNum(){
//     let a = 12;
//     let b = 2;
//     let c = 33;
//     return ((a>b)?((a>c)?a:c):((b>c)?b:c));
// }
// console.log(maximumNum())

//with argument and without return
// function maximumNum(num1,num2,num3){
//       if(num1>=num2 && num1>=num3){
//         console.log(num1);
//       }
//       else if (num2 >= num3) {
//         console.log(num2)
//       }
//       else {
//         console.log(num3);
//       }
// }
// maximumNum(10,20,30);

//ternary
// function maximumNum(num1,num2,num3){
//     console.log(((num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3)));
// }
// maximumNum(100,200,300);

//without argument and return
//if else
// function maximumNum(){
//      const num1=10;
//      const num2=100;
//      const num3=1000;
//      if(num1 >= num2 && num1 >= num3) {
//             return  num1;
//         }
//     else if ( num2 >= num3) {
//             return  num2;
//         }
//     else {
//             return  num3;
//     }
// }
// console.log(maximumNum());

//ternary
// function maximumNum(){
//     const num1=10;
//     const num2=100;
//     const num3=1000;
//     return max=((num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3));
// }
// console.log(maximumNum());

// function caluculatePrice(price,discount=10){
//     return price-((price*discount)/100);
// }
// console.log(caluculatePrice(100))

//Arrow function
// squareNum=(num)=>num**2;
// console.log(squareNum(5))

//----------------------------------------------String--------------------------------------------//

// Write a JavaScript function to check whether an 'input' is a string or not.
// function isString(input){
//     if(typeof input === "string"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isString('W3resource'))

// Write a JavaScript function to check whether a string is blank or not.

// function isBlank(input){
//     if(input.trim()===""){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isBlank("")) //true
// console.log(isBlank(" ")) //true
// console.log(isBlank('hello')) //false

// Write a JavaScript function to split a string and convert it into an array of words.
// function stringToArray(input){
//     return input.split(" ")
// }
// console.log(stringToArray("Robin Singh"))

// Write a JavaScript function to extract a specified number of characters from a string.
// function extractCharacters(input,characters){
//      if(typeof input !=='string' || characters<=0){
//         return '';
//      }
//      return input.slice(0,characters);
// }
// console.log(extractCharacters("Hello World",5))
// console.log(extractCharacters("Robin singh",4))

// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// function protectEmail(input){
//     return input.replace(input.slice(5,input.indexOf('@')),"...");
// }
// console.log(protectEmail("robin_singh@example.com")); 

// Write a JavaScript function to parameterize a string.
// function parameterize(input){
//     return input.toLowerCase().split(" ").join("-")
// }
// console.log(parameterize('Robin Singh from USA'))

// Write a JavaScript function to capitalize the first letter of each word in a string.

// function capitalize(input) {
//     let words = input.split(" ");
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     return words.join(" ");
// }
// console.log(capitalize('js string exercises'));

//  Write a JavaScript function to capitalize the first letter of a string.
// function capitalize(input){
//     return input.charAt(0).toUpperCase() + input.slice(1)
// }
// console.log(capitalize('js string exercises'))

// Write a JavaScript function to insert a string within a string at a particular position 
// function insert(str, insert, position = 1) {
//     if (position < 1 || position > str.length) {
//         return "";
//     }
//     let result = str.slice(0, position - 1);
//     result += insert;
//     result += str.slice(position - 1)
//     return result;
// }
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.', 'JavaScript '));
// console.log(insert('We are doing some exercises.', 'JavaScript', 18));

// const a = 'hello';
// const b = new String('hello');
// console.log(typeof a) //string
// console.log(typeof b) //object ... Why?

// var str = "Twice a day";
// var index = str.indexOf("a");
// var index2 = str.lastIndexOf("a");
// console.log(index+1)
// console.log(index2)
// console.log(str.indexOf("a", index + 1) === index2);  // Doubt 

// console.log(typeof null) // object

// var num = -1234.56;
// console.log(num.toPrecision(5));

// let num = 0.5;
// console.log(num.toFixed(2))
// console.log(num.toPrecision(2))

// let num = 100.1806;
// console.log(num.toFixed(3))
// console.log(num.toPrecision(2))

// let num = -3.14
// console.log(num.toFixed(3))

// let num = 106;
// console.log(num.toExponential(1))

// console.log( parseInt(100 .toString(2), 2) );

//  How do you perform a case-insensitive search in a string in JavaScript?
// function caseSensitiveSearch(search, target) {
//     let searchStringUpper = search.toUpperCase();
//     let targetStringUpper = target.toUpperCase();
//     let result = targetStringUpper.indexOf(searchStringUpper)
//     return result !==-1;
// }
// console.log(caseSensitiveSearch('hello', 'Hello')) //true
// console.log(caseSensitiveSearch('hello','World'))  //false

//  How do you extract unique characters from a string in JavaScript?
// function getUniqueCharacter(str) {
//     let uniqueString = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i]
//         if (uniqueString.indexOf(char) === -1) {
//             uniqueString += char
//         }
//     }
//     return uniqueString;
// }
// console.log(getUniqueCharacter('Hello World')) //Helo Wrd

// How do you count the number of words in a string in JavaScript?
// function countWords(str){
//     return str.split(' ').join('').length;
// }
// console.log(countWords('Hello World'))

// let num = 123;
// console.log(num.toPrecision(2))

// let num = 10;
// console.log(num.toPrecision(2))
// console.log(num.toFixed(1))
// console.log(typeof -3.14.toFixed(3))
// console.log( parseInt(100 .toString(2), 2) );
// console.log(0.56.toPrecision(1));

// var a = NaN;
// console.log(a === NaN);

// console.log(Number(null)) //0

// console.log(Number(1.44).toFixed(4)) //1.4400
// console.log(Number(1.44).toPrecision(4)) //1.440

// console.log(Number.isFinite('0')) //false
// console.log(isFinite('0')) //true

// let a = 'The quick brown fox jumps over the lazy dog.'
// console.log( typeof a.charCodeAt(2))
// a.endsWith('g')
// console.log(a)

// let num = 77.12343
// console.log(num.toExponential(0)) //string //8e+1
// console.log(num.toExponential(1)) //string //7.7e+1