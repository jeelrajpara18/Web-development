//1.What is the result of 5 + 4 * 2?
console.log(5+4*2); //13 the precedence of mul. is high so first mul. then add.

//2.How is the expression 10 - 2 / 4 evaluated?
//precedence of division is high so first division then sub.
console.log(10-2/4); //9.5

//3.What is the value of 3 * (2 + 4)?
//brackets have higher precedence hence first it will solve brackets(addition)then multiplication
console.log(3*(2+4)); //18

//4.How does JavaScript evaluate the expression 8 / (2 + 2)?
//similar to que 3 first brackets then division
console.log(8/(2+2));//2

//5.What is the result of 15 % 4 + 2?
//precedence of modulus is not given anywhere but in one article it is mentioned that precedence of modulus is same as mul and div. so first modulus then addition
console.log(15%4+2);//5

//6.How is the expression 20 / 4 - 2 calculated?
//first division then subtraction
console.log(20/4-2);//3

//7.What is the value of 2 + 3 * 4 / 2?
// precendence of div and mul is same but the associativity is from left to right so first mul then div then add
console.log(2+3*4/2);//8

//8.How does JavaScript interpret the expression 4 / 2 ** 2?
//precedence of exponential is higher then division
console.log(4/2**2);//1

//9.What is the result of (10 + 2) / 3?
//first brackets then div
console.log((10+2)/3);//4

//10.How is the expression 6 * 2 % 4 evaluated?
//according to research precedence of mul and modulus is same but the associativity is from left to right
console.log(6*2%4);//0

//11.What is the value of 2 ** 3 ** 2?
//associativity from right to left
console.log(2**3**2);512

//12.How does JavaScript evaluate the expression (4 + 2) ** 3?
//precedence of bracket is more
console.log((4+2)**3);//216

//13.What is the result of 2 + 3 * 4 ** 2?
//precedence of exponential is higher than mul
console.log(2+3*4**2);//50

//14.How is the expression 6 * (2 + 4) / 3 calculated?
//first bracket then mul then div
console.log(6*(2+4)/3);//12

//15.What is the value of (10 - 2) / 4?
console.log((10-2)/4);//2

//16.How does JavaScript interpret the expression 8 / (2 * 2)?
console.log(8/(2*2));//2

//17.What is the result of 15 % (4 + 2)?
console.log(15%(4+2));//3

//18.How is the expression 20 / (4 - 2) evaluated?
console.log(20/(4-2));//10

//19.What is the value of 2 + (3 * 4) / 2?
console.log(2+(3*4)/2);//8

//20.How does JavaScript evaluate the expression 4 / (2 ** 2)?
console.log(4/(2**2));//1

//21.What is the result of (10 + 2) / 3?
console.log((10+2)/3);4

//22.How is the expression 6 * (2 % 4) calculated?
console.log( 6 * (2 % 4)); //12

//23.What is the value of 2 ** (3 ** 2)?
console.log(2 ** (3 ** 2));512

//24.How does JavaScript interpret the expression (4 + 2) ** 3?
console.log((4 + 2) ** 3); //216

//25.What is the result of 2 + (3 * 4 ** 2)?
//in the bracket first exponential then multiplication then outside the bracket addition
console.log(2 + (3 * 4 ** 2));//50

//26.How is the expression 6 * (2 + 4) % 3 evaluated?
//first bracket then as per associativity mul then modulus
console.log(6*(2+4)%3); //0

//27.What is the value of (10 - 2) / 4?
console.log((10-2)/4);//2

//28.How does JavaScript evaluate the expression 8 / (2 + 2)?
console.log(8/(2+2));//2


//29.What is the result of 15 % (4 - 2)?
console.log(15%(4-2));//1

//30.How is the expression 20 / 4 - 2 calculated?
console.log(20/4-2);//3

//31.What is the value of 2 + 3 * (4 / 2)?
console.log(2+3*(4/2));//8

//32.How does JavaScript interpret the expression 4 / (2 ** 2)?
console.log(4/(2**2));//1

//33.What is the result of (10 + 2) / 3?
console.log((10+2)/3);//4

//34.How is the expression 6 * (2 % 4) - 3 evaluated?
console.log(6*(2%4)-3)//9

//35.What is the value of 2 ** (3 ** 2)?
console.log(2**(3**2));512

//36.How does JavaScript evaluate the expression (4 + 2) ** 3 - 1?
console.log((4 + 2) ** 3 - 1);//215

//37.What is the result of 2 + (3 * 4 ** 2) / 2?
//in bracket first exponential then mul then division then add
console.log(2 + (3 * 4 ** 2) / 2); //26

//38.How is the expression 6 * (2 + 4) % 3 + 1 calculated?
console.log(6 * (2 + 4) % 3 + 1);//1

//39.What is the value of (10 - 2) / 4 + 2?
console.log((10 - 2) / 4 + 2);//4

//40.How does JavaScript interpret the expression 8 / (2 * 2) + 3?
console.log( 8 / (2 * 2) + 3);//5

//41.What is the result of 15 % (4 + 2) - 1?
console.log(15 % (4 + 2) - 1)//2

//42.How is the expression 20 / (4 - 2) + 1 evaluated?
console.log( 20 / (4 - 2) + 1);//11

//43.What is the value of 2 + (3 * 4) / 2 - 1?
console.log(2 + (3 * 4) / 2 - 1);//7

//44.How does JavaScript evaluate the expression 4 / (2 ** 2) + 3?
console.log(4 / (2 ** 2) + 3);//4

//45.What is the result of (10 + 2) / 3 - 1?
console.log((10 + 2) / 3 - 1);//3

//46.How is the expression 6 * (2 % 4) / 3 + 2 calculated?
console.log( 6 * (2 % 4) / 3 + 2);//6

//47.What is the value of 2 ** (3 ** 2) - 1?
console.log(2 ** (3 ** 2) - 1);//511

//48.How does JavaScript interpret the expression (4 + 2) ** 3 + 1?
console.log((4 + 2) ** 3 + 1);//217

//49.What is the result of 2 + (3 * 4 ** 2) / 2 - 3?
console.log(2 + (3 * 4 ** 2) / 2 - 3);//23

//50.How is the expression 6 * (2 + 4) % 3 + 1 - 2 evaluated?
console.log(6 * (2 + 4) % 3 + 1 - 2);//-1

//51.What is the result of "5" + "3"?
//the ans will be 53 as here 5 and 3 are in double quotation so it is taken as string 
console.log("5"+"3");

//52.What is the value of "7" - "2"?
//ans will be 5 because concatation is done only in plus operator (binary operator)
console.log("7"-"2");

//53.How does JavaScript evaluate "10" * "2"?
//ans will be 20 
console.log("10"*"2");

//54.What is the result of "15" / "5"?
//here division will be done hence ans will be 3
console.log("15"/"5");

//55.How is the expression "10" % "3" calculated?
//here simply we will get modulus (remainder)1
console.log("10"%"3");

//56.What is the value of Number("2.5") + 1.8?
//ans will be 2.51.8
console.log("2.5"+"1.8");

//57.How does JavaScript interpret 4 - Number("2.5")?
// if we mention before string it will force that string to become number hence concatation will not happen
console.log(4 - Number("2.5"));

//58.What is the result of 1.5 * Number("3.2")?
//simply multiplication 4.8
console.log(1.5 * Number("3.2"));

//59.How is the expression 9.8 / Number("2") evaluated?
//division of 9.8 by 2 that will be 4.9
console.log(9.8 / Number("2"));

//60.What is the value of "7" + String(2.5)?
//here concatation will happen as 2.5 is forced to become a string ans will be 72.5
console.log("7" + String(2.5));

//61.How does JavaScript calculate 10 - Number("2.5")?
//simply subtraction 7.5
console.log(10 - Number("2.5"));

//62.What is the result of 3.5 * Number("2")?
//ans will be 7
console.log(3.5 * Number("2"));

//63.How is the expression 8 / Number("2.5") calculated?
//ans will be 3.2
console.log(8 / Number("2.5") );

//64.What is the value of String(1.2) + "0.5"?
//ans will be 1.20.5
console.log(String(1.2) + "0.5");

//65.How does JavaScript interpret 6 - Number("1.2")?
//6-1.2 which is equal to 4.8
console.log(6 - Number("1.2"));

//66.const result = 10 * 2 / 5 + Math.pow(2, 3) - 4 % 3; what will be result?
// ans would be 11 first math.pow will be solved then modulus then mul. then div then addition and at last subtraction
const result= 10 * 2 / 5 + Math.pow(2, 3) - 4 % 3;

//67.What is the result of "hello" && 0?
//it will be zero as no condition is given
console.log("hello" && 0);

//68.What is the value of "" || "world"?
//ans will be world as in or operator if false value is given it will print the next value 
console.log(""||"world");

//69.How does JavaScript evaluate null && true?
//null value in js is considered as a false value even if it is not so the ans will be null
console.log(null && true);

//70.What is the result of NaN || "value"?
//ans will be value as for or operator NAN is considered as false value
console.log(NaN || "value");

//71.How is the expression undefined && null evaluated?
//for and operator js takes first condition and prints it and in this both the condition is false condition
console.log(undefined && null);

//72.What is the value of 10 && "number"?
//here the ans is number as in and operator js checks if the first condition is true and here it is true and second condition is also true so it will print second condition
console.log(10 && "number");

//73.How does JavaScript interpret "" || 0?
//it will ans 0
console.log(""|| 0);

//74.What is the result of NaN && "value"?
//here js checks the first condition and it is false hence it directly executes that
console.log(NaN && "value");

//75.How is the expression null || undefined calculated?
//both are falsy value hence ans will be undefined as last is undefined
console.log(null||undefined);

//76.What is the value of false && "false"?
//ans will be false
console.log(false&&false);

//77.What is the result of "hello" || 0?
//ans will be hello
console.log("hello"||0);

//78.How does JavaScript evaluate 0 && true?
//first value is falsy value hence it will directly execute it
console.log(0 && true);

//79.What is the value of NaN || null?
//ans will be null as second condition is null
console.log(NaN||null);

//80.How is the expression undefined && "undefined" evaluated?
//left operand is falsy hence it will be executed
console.log(undefined&&"undefined");

//81.What is the result of 10 || "number"?
//the right operand has a truthy value hence the execution stops and it will print that
console.log(10||"number");

//82.How does JavaScript interpret "" && 0?
//here there will be no ans coz string is empty
console.log(""&& 0);

//83.What is the value of NaN || ""?
//here there will be no ans coz string is empty
console.log(NaN ||"");

//84.What is the result of null && undefined?
//first value is falsy hence execution will be stopped and null will be printed
console.log(null && undefined);

//85.How is the expression false || "false" calculated?
//ans will be false but the false of left operand as right one is falsy value hence it will stopped at that point only and right one is considered as string
console.log(false||"false");

//86.What is the value of "hello" && 10?
//both are truthy value hence 10 will be printed
console.log("hello" && 10);

//87.What is the result of true ? "Yes" : "No"?
//ans will be yes it is a ternary operator
console.log(true?"yes":"No");

//88.What is the value of false ? 10 : 5?
//ans will be 5
console.log(false?10:5);

//89.How does JavaScript evaluate 3 > 5 ? "Greater" : "Less"?
//and will be less
console.log(3>5?"greater":"less");

//90.What is the result of 10 === 10 ? "Equal" : "Not equal"?
//ans will be equal as both value and data type are equal
console.log(10 === 10 ? "equal" : "not equal");

//91.How is the expression false ? "Hello" : "World" calculated?
//and will be world as false condition is applied
console.log(false ? "Hello" : "World");

//92.What is the value of null ? "NotNull" : "Null"?
//ans will be null
console.log(null?"not null":"null");

//93.How does JavaScript interpret undefined ? "Defined" : "Undefined"?
//ans will be undefined
console.log(undefined?"defined":"undefined");

//94.What is the result of 'a' !== 'b' ? "Different" : "Same"?
//ans will be different as a is not equal to b
console.log('a' !== 'b' ? "Different" : "Same");

//95.How is the expression 1 < 0 ? "True" : "False" evaluated?
//ans will be false
console.log(1 < 0 ? "True" : "False");

//96.What is the value of 0 ? "Truthy" : "Falsy"?
//ans will be falsy
console.log(0 ? "Truthy" : "Falsy");

//97.What is the result of "" ? "Truthy" : "Falsy"?
//ans will be falsy
console.log( "" ? "Truthy" : "Falsy");

//98.How does JavaScript evaluate NaN ? "Valid" : "Invalid"?
//ans will be invalid 
console.log(NaN?"valid":"invalid");

//99. What is the value of [] ? "NotEmpty" : "Empty"?
// ans will be empty because array is truthy value
console.log([]?"not empty":"empty"); 

//100.How is the expression [1, 2] ? "Exists" : "Not exists" calculated?
//array consists some data hence exists
console.log([1,2]?"exists":"not exists");

//101. What is the result of {} ? "Object" : "Not object"?
//ans will be object because object is truthy value
console.log({}?'object':"not object");

//102.How does JavaScript interpret 0.5 ? "True" : "False"?
//ans will be true as it contains some value
console.log(0.5?"true":"false");

//103.What is the value of undefined === null ? "Equal" : "Not equal"?
// console.log( === null ? "Equal" : "Not equal")

//104.What is the result of 10 > 5 ? "Greater" : "Less"?
//ans will be greater
console.log(10>5?"greater":"less");

//105.How is the expression null !== undefined ? "Different" : "Same" evaluated?
//first condition is checked as null is not equal to undefined is true
console.log(null !== undefined ? "Different" : "Same");

//106.What is the value of true ? 1 : 0?
//ans will be 1
console.log(true?1:0);

//107.Write an expression for getting a large number of three variables using a ternary operator?
let a=7;
let b=8;
let c=5;
console.log("The lagest among the three is:",(a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c));