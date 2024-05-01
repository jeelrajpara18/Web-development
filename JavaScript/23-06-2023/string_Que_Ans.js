// 1. Which string method is used to determine the length of a string?
// .length property is used to declare length of string
// const str="Helloo World";
// console.log(str.length);



function str(){
    const obj1={
        name:"Jeel",
        eid:119,
    }
    return obj1.name.length;
}
console.log(str());  // in this code we made an obj inside a function and print it

// const obj1={
//     a:10,
//     b:15,
//     c:{
//        d:20,
//        e:"Hello",
//        f:"World",
//     },
//     g:"Good Morning"
// }
// const length= obj1.g.length;
// console.log(length);  //here we created a nested obj and print length of it

// 2.How would you convert a string to uppercase using a string method?
// to convert a string to uppercase or lowecase use uppercase() and lowecase() method respectively.
// let str1="jeel";
// let str2=107;// for non string elements it will give a syntax error that it is not a function
// console.log(str1.toUpperCase()); //nothing will happen if we pass parameters
// console.log(str2.toUpperCase());

// 3.Which method is used to find the position of a specified value within a string?
// const str1="Hello";
// const str2="World";
// console.log(str1.at(-5));
// console.log(str2.charAt(-1));
// the difference between charAt() and at() is that charAt doesn't give character index when the range is exceeded suppose the word given is of 5 letters and if we exceed that with 6 even if we write 5 it will give no value because index starts from 0 also we cannot give negative values
// while in at() if we give negative value it will take index from the back and if the range is exceeded it will give undefined

// 4.How would you concatenate two strings using a string method?
// following are three ways to concat two strings
// const str1="Hello";
// const str2="World";
// console.log(str1.concat(" ",str2));
// console.log(str1+" "+str2);
// const str3=`${str1} ${str2}`;
// console.log(str3);

// 5.Which method would you use to extract a specific portion of a string?
// sunString()  //slice()

// const str1="The Rain in spain is mostly plain";
// const str2="Every Moutain is green from the other side";
// console.log(str1.substring(8,NaN));// (8,0) prints letters till 8 and after that no words and (0,8) prints words after 8 index number mentioning - sign in first parameter does not effect but in second parameter it will not print anything and for both the parameter also
// console.log(str2.slice(8,NaN));

// 6.How can you replace a specific value with another value within a string using a method?
// let str="gwood Morning";
// console.log(str.replace("gwood","Good"));

// 7.Which method would you use to split a string into an array of substrings based on a specified separator?
// let str="Every mountain is greener from the other side";
// console.log(str.split("",6));

// 8.How would you remove leading and trailing whitespace from a string using a method?
// to remove white spaces used trimedStr() it will remove whitespaces from beginning and end 
// to remove white space only from beginning use trimStart() and for end trimEnd()
// let str=" Every mountain is greener from the other side ";
// let str2=" The rain in spain is mainly plain ";
// let str3="This is javascript trim method types";
// console.log(str.trim());
// console.log(str2.trimEnd());
// console.log(str3.trimStart());

// 9.Which method is used to search for a specified pattern and return the first occurrence in a string?
// indexOf(),lastIndexOf()
// let str=" Every mountain is greener from the other side ";
// let str2=[1,2,3,"Hello"];
// console.log(str.indexOf("m"));
// console.log(str.lastIndexOf("er"));
// console.log(str2.indexOf(3));
// console.log(str2.lastIndexOf("h"));

// 10.How can you check if a string starts with a specific value using a string method?
// for start startWith() and for end endWith()

// const str1="The Rain in spain is mostly plain";
// const str2="Every Moutain is green from the other side";
// console.log(str1.startsWith("R",4));
// console.log(str2.endsWith("e")); //index parameter for end is not working

// 11.const message = "Hello, World!";
// console.log(message.length);
// my guess:13  ans:13
// const message="Hello, World!";
// console.log(message.length);

// 12.const str = "HelloWorld";
// console.log(str.toLowerCase());
// my guess:helloworld ans :helloworld
// const str = "HelloWorld";
// console.log(str.toLowerCase());

// 13.const sentence = "I love JavaScript!";
// console.log(sentence.indexOf("JavaScript"));
// my guess: 7 ans:7
// const sentence = "I love JavaScript!";
// console.log(sentence.indexOf("JavaScript"));


// 14.const name = "John";
// const greeting = `Hello, ${name}!`;
// console.log(greeting);
// my guess:Hello, John! ans:Hello, John!
// const name = "John";
// const greeting = `Hello, ${name}!`;
// console.log(greeting);

// 15.const text = "Hello, World!";
// console.log(text.substring(7));
// my guess:World!
// const text = "Hello, World!";
// console.log(text.substring(7));

// 16.const message = "Hello, World!";
// console.log(message.replace("World", "Universe"));
// my guess: Hello, Universe  ans:Hello, Universe!
// const message = "Hello, World!";
// console.log(message.replace("World", "Universe"));

// 17.const words = "apple, banana, orange";
// const fruits = words.split(", ");
// console.log(fruits);
// my guess:[ 'apple', 'banana', 'orange' ]; ans:[ 'apple', 'banana', 'orange' ]
// const words = "apple, banana, orange";
// const fruits = words.split(", ");
// console.log(fruits);

// 18.const text = "   Hello, World!   ";
// console.log(text.trim());
// my guess:Hello, World!   ans:Hello, World!
// const text = "   Hello, World!   ";
// console.log(text.trim());

// 19.const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.includes("dog"));
// my guess: true  ans:true
// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.includes("dog"));

// 20.const str = "Hello, World!";
// console.log(str.endsWith("!"));
// my guess: true ans:true
// const str = "Hello, World!";
// console.log(str.endsWith("!"));


// 21.const sentence = "JavaScript is fun!";
// console.log(sentence.charAt(4));
// my guess: S ans:S
// const sentence = "JavaScript is fun!";
// console.log(sentence.charAt(4));

// 22.const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(", ", str2));
// my guess: Hello, World  ans:Hello, World
// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(", ", str2));

// 23.const sentence = "JavaScript is awesome!";
// console.log(sentence.slice(0, 10));
// my guess: JavaSript  ans:JavaScript
// const sentence = "JavaScript is awesome!";
// console.log(sentence.slice(0, 10));


// 24.const text = "Hello, World!";
// console.log(text.repeat(3));
// my guess: Hello, World!, Hello,World!, Hello,World  ans:Hello, World!Hello, World!Hello, World!
// const text = "Hello, World!";
// console.log(text.repeat(3));


// 25.const sentence = "The quick brown fox";
// console.log(sentence.split(" "));
// my guess:[ 'The', 'quick', 'brown', 'fox' ]  ans:[ 'The', 'quick', 'brown', 'fox' ]
// const sentence = "The quick brown fox";
// console.log(sentence.split(" "));

// 26.const str = "Hello, World!";
// console.log(str.indexOf("o"));
// my guess: 4  ans:4
// const str = "Hello, World!";
// console.log(str.indexOf("o"));


// 27.const sentence = "JavaScript is fun!";
// console.log(sentence.substring(4, 10));
// my guess: Script  ans:Script
// const sentence = "JavaScript is fun!";
// console.log(sentence.substring(4, 10));


// 28.const text = "Hello, World!";
// console.log(text.charAt(7));
// my guess: W  ans:W
// const text = "Hello, World!";
// console.log(text.charAt(7));


// 29.const sentence = "I love JavaScript!";
// console.log(sentence.split("o"));
// my guess:[ 'I l', 've JavaScript!' ] ans:[ 'I l', 've JavaScript!' ] 
// const sentence = "I love JavaScript!";
// console.log(sentence.split("o"));


// 30.const str = "Hello, World!";
// console.log(str.includes("World"));
// my guess: true  ans:true
// const str = "Hello, World!";
// console.log(str.includes("World"));


// 31.const sentence = "JavaScript is cool!";
// console.log(sentence.lastIndexOf("o"));
// my guess:16  ans:16
// const sentence = "JavaScript is cool!";
// console.log(sentence.lastIndexOf("o"));


// 32.const text = "Hello, World!";
// console.log(text.startsWith("Hello"));
// my guess: true  ans:true
// const text = "Hello, World!";
// console.log(text.startsWith("Hello"));

// 33.const str = "Hello, World!";
// console.log(str.toUpperCase());
// my guess:HELLO, WORLD!  ans:HELLO, WORLD
// const str = "Hello, World!";
// console.log(str.toUpperCase());


// 34.const sentence = "JavaScript is awesome!";
// console.log(sentence.toLowerCase());
// my guess: javascript is awesome!  ans:javascript is awesome!
// const sentence = "JavaScript is awesome!";
// console.log(sentence.toLowerCase());


// 35. const str = "Hello, World!";
// console.log(str.charAt(13));
// my guess:empty ans empty
// const str = "Hello, World!";
// console.log(str.charAt(13));


// 36.const sentence = "JavaScript is fun!";
// console.log(sentence.substr(4, 10));
// my guess: JavaScript  ans:Script is
// const sentence = "JavaScript is fun!";
// console.log(sentence.substr(4, 10));


// 37.const text = "Hello, World!";
// console.log(text.includes("WORLD"));
// my guess : false  ans:true
// const text = "Hello, World!";
// console.log(text.includes("WORLD"));


// 38. const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome"));
// my guess:JavaScript is awesome!  ans:JavaScript is awesome!
// const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome"));


// 39. const str = "Hello, World!";
// console.log(str.charCodeAt(4));
// my guess:111 ans:111
// const str = "Hello, World!";
// console.log(str.charCodeAt(4));

// 40. const sentence = "JavaScript is powerful!";
// console.log(sentence.split(" ").length);
// my guess:3 ans 3
// const sentence = "JavaScript is powerful!";
// console.log(sentence.split(" ").length);

// 41.const text = "Hello, World!";
// console.log(text.search("W"));
// my guess:7   ans:7
// const text = "Hello, World!";
// console.log(text.search("W"));

// 42.const sentence = "JavaScript is dynamic!";
// console.log(sentence.slice(-7));
// my guess: ynamic!  ans:ynamic!
// const sentence = "JavaScript is dynamic!";
// console.log(sentence.slice(-7));


// 43.const str = "Hello, World!";
// console.log(str.concat(" Goodbye!"));
// my guess: Hello, World! Goodbye! ans:Hello, World! Goodbye!
// const str = "Hello, World!";
// console.log(str.concat(" Goodbye!"));

// 44.const sentence = "JavaScript is flexible!";
// console.log(sentence.charAt(sentence.length - 1));
// ans:!
// const sentence = "JavaScript is flexible!";
// console.log(sentence.charAt(sentence.length - 1));

// 45.const sentence = "JavaScript is interesting!";
// console.log(sentence.substring(10));
// my guess: is intresting!  ans: is interesting!
// const sentence = "JavaScript is interesting!";
// console.log(sentence.substring(10));

// 46.const str = "Hello, World!";
// console.log(str.search("World"));
// ans:7
// const str = "Hello, World!";
// console.log(str.search("World"));

// 47. const sentence = "JavaScript is versatile!";
// console.log(sentence.split(" ").reverse().join(" "));
// const sentence = "JavaScript is versatile!";
// console.log(sentence.split(" ").reverse().join(" "));
// in this first the string is splitted into an array so basically badhu chutu padyu pela
// pachi e array ne reverse karyu 
// and then join method thi badhu join kari didhu

// 48. const sentence = "JavaScript is powerful!";
// console.log(sentence.substring(4, 10));
// my guess:Script  ans:Script
// const sentence = "JavaScript is powerful!";
// console.log(sentence.substring(4, 10));


// 49. const str = "Hello, World!";
// console.log(str.charCodeAt(0));
// my guess: code of H  ans:72
// const str = "Hello, World!";
// console.log(str.charCodeAt(0));


// 50. const sentence = "JavaScript is amazing!";
// console.log(sentence.slice(4, 10));
// ans:Script
// const sentence = "JavaScript is amazing!";
// console.log(sentence.slice(4, 10));

// 51. const text = "Hello, World!";
// console.log(text.indexOf("o", 5));
// my guess:8 ans 8
// const text = "Hello, World!";
// console.log(text.indexOf("o", 5));

// 52.const sentence = "JavaScript is fun!";
// console.log(sentence.startsWith("Java"));
// my guess=true  ans:true
// const sentence = "JavaScript is fun!";
// console.log(sentence.startsWith("Java"));

// 53. const str = "Hello, World!";
// console.log(str.endsWith("!"));
// my guess:true  ans:true
// const str = "Hello, World!";
// console.log(str.endsWith("!"));

// 54.const sentence = "JavaScript is amazing!";
// console.log(sentence.lastIndexOf("a", 12));
// ans 3
// const sentence = "JavaScript is amazing!";
// console.log(sentence.lastIndexOf("a", 12));  //doubt

// 55. const text = "Hello, World!";
// console.log(text.substring(7, 2));
// my guess:llo,  ans:llo,
// const text = "Hello, World!";
// console.log(text.substring(7, 2));

// 56. const sentence = "JavaScript is cool!";
// console.log(sentence.concat(" I love it!"));
// my guess:JavaScript is cool! I love it!  ans:JavaScript is cool! I love it!
// const sentence = "JavaScript is cool!";
// console.log(sentence.concat(" I love it!"));


// 57. const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));
// my guess: W ans W
// const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));

// 58.const str = "Hello, World!";
// console.log(str.toUpperCase().charAt(7));
// same as 57

// 59.const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome").toUpperCase())
// my guess JASCRIPT IS AWESOME!  ans:JAVASCRIPT IS AWESOME!
// const sentence = "JavaScript is amazing!";
// console.log(sentence.replace("amazing", "awesome").toUpperCase());

// 60.Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource')); // true
// console.log(is_string([1, 2, 4, 0])); // false
// function is_string(input){
//     if(typeof input==='string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(is_string('w3resouce'));
// console.log(is_string([1,2,3,4,0]));    //doubt


// 61.Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank('')); // true
// console.log(is_Blank('abc')); // false
// function is_Blank(input){
//     if(input.trim() == ""){
//         return true;
//     }
//     else return false;
// }
// console.log(is_Blank(""));//true
// console.log(is_Blank(''));//true
// console.log(is_Blank('abc')); //false
// console.log(is_Blank[1,2,3]); //undefined
// console.log(is_Blank(" "));//true
// console.log(is_Blank(1,2,3)); //false

// 62.Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]
// const string_to_array="Robin singh";
// console.log(string_to_array.split(" ")); //[ 'Robin', 'singh' ]

// function string_to_array(input){
//     return input.split(" ");
// }
// console.log(string_to_array("Robin singh"));  //[ 'Robin', 'singh' ]
// console.log(string_to_array("Hello Robin singh"));  //[ 'Hello', 'Robin', 'singh' ]
// console.log(string_to_array(1,2,3,"Robin singh")); //error:input.split is not a function
// console.log(string_to_array("Robin singh",1,2,3)); //error:input.split is not a function

// 63.Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4)); // "Robi"

// function truncate_string(input){
//     return input.substring(0,4);
// }
// console.log(truncate_string("Robin singh"));  //Robi


// function truncate_string(input){
//     return input.slice(0,4);
// }
// console.log(truncate_string("Robin singh"));  //Robi


// 64.Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com")); 
// Output:  "robin...@example.com"

// function protect_email(input){
//     return input.replace(input.slice(5,input.indexOf("@")),"...");
// };
// console.log(protect_email("Robin_singh@example.com"));
// console.log(protect_email("jeelrajpara18@gmail.com"));

// 65.Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// Output: "robin-singh-from-usa"

// function parameterize(input){
//     return input.toLowerCase().replaceAll(" ","-");
// };
// console.log(parameterize("Robin singh from USA"));

// function parameterize(input){
//     return input.toLowerCase().split(" ").join("-");
// }
// console.log(parameterize("Robin singh from USA"));

// 66.  Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// Output: "Js string exercises

// function capitalize(input){
//     return input.charAt(0).toUpperCase() + input.slice(1); //this works with slice but not with substring why?
// }
// console.log(capitalize("js string exercises"));

// 67.Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

// function capitalize(pass_string){
//     let arr=pass_string.split(" ");
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
//     };
//     console.log(arr.join(" "));
// }
// console.log(capitalize("js string exercises"));

// function capitalize_Words(pass_string){
//     let arr=pass_string.split(" ");
//     for(index of arr){
//         index=index.charAt(0).toUpperCase()+index.slice(1);
//     };
//     console.log(arr.join(" "));
// }
// console.log(capitalize_Words("js string expression"));

//68.
// function insert(string,insert,position=1){
//     if(position<=1 || position >string.length){
//         return string;
//     }
//     let result=string.slice(0,position -1);
//     result +=insert;
//     result +=string.slice(position -1)
//     return result;
// }
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript',18));

//69.
// let text = "Apple, Banana, Kiwi";
// text.slice(-12, -6);
// console.log(text);
//Ans: Apple,Banana,Kiwi there will be no change as sliced result is not stored