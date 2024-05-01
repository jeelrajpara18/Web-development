//1.
// const source = { a: 1 };
// const target = { b: 2 };
// Object.assign(target, source);
// console.log(target);  //ans will be {b:2,a:1}

//2.
// const obj1 = { a: 12, b: 23 };
// const obj2 = obj1;
// const obj3 = { ...obj1 };
// obj1.c = 23;
// console.log(obj1.c, obj2.c, obj3.c);
//here my guess was 23,23,23 but ans in 23,23,undefined because here we are not passing the reference of obj1 to obj 3 but we are individually assigning values of a and b

//3.
// const obj1 = { a: 12, b: 23 };
// const obj2 = { a: 44, b: 45 };
// const obj3 = Object.assign(obj1, obj2);
// obj2.a = 22;
// console.log(obj1, obj2, obj3);
//obj1={a:44,b:45}
//obj2={a:22,b:45}
//obj3={a:44,b:45}
//here the obj1 is target that means here the changes are applied and obj 2 is source means the changes are applied from obj 2 and we are passing reference of source obj in obj 3 so obj 3 will take properties of obj2

//4.
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign(obj1, obj2);
// obj1.a = 22;
// console.log(obj3);
//here obj 3 will take the new value of a assigned because refernce of a is passed in obj 3 so any changes made in obj 1 will be applicable only to obj 3

//5.
// const obj1 = { a: 77, b: 67 };
// const obj2 = { a: 90, b: 34 };
// const obj3 = Object.assign({}, obj1, obj2);
// obj1.a = 22;
// console.log(obj3);
// console.log(obj2);
// console.log(obj1);
//my guess {a:22,b:34}
//ans:{a:90,34} here in this case an empty object is created in Object.assign and the last obj is obj2 so refrence of obj2 is passed hence there will be no effect of changed value of a in obj3

//6.
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, source);
// console.log(target);
//my guess :{a:{b:1}}
//here target is merged with source so value of source is passed with target

//7.
// const source = { a: { b: 1 } };
// const target = {};
// Object.assign(target, JSON.parse(JSON.stringify(source)));
// source.a.b = 2;
// console.log(target);
//my guess:{a:{b:1}}
//here no changes are applied because we are stringyifying source and not passing the reference of source to target

//8.
// const source = { a: 1 };
// const target = Object.assign({}, source);
// delete target.a;
// console.log(source);
// console.log(target);
// my guess:{a:1}
//changes are applied to source object from the target object so any changes applied in target will not be applicable to source but changes applied to source will be applicable to target and here we are deleting target and we are printing source so we will not see any change but if we log target we will get empty object because target.a is deleted

//9.
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === source);
// console.log(result);
// console.log(source);
//here if we see value of result and source differently it will be different hence equality will be false 

//10.
// const target = { a: 1 };
// const source = { b: 2 };
// const result = Object.assign(target, source);
// console.log(result === { a: 1, b: 2 });
// my guess:true
//ans will be false because even though the value of result is same as {a:1,b:2} both has different object memory

//11.
// const target = { a: 1 };
// const source = { b: 2 };
// Object.assign(target, source);
// target.b = 234;
// console.log(source);
//my guess:2
//The changes are done in target so it is not applicable in source if the changes would have done in source then target will be changed

//12.
// const target = {};
// const source = { a: 1 };
// const result = Object.assign(target, source);
// source.a = 2;
// console.log(result);
// my guess:{a:1}  ans:{a:1}

//13.
// const target = {};
// const source = { a: { b: 1 } };
// const result = Object.assign(target, source);
// result.a.b = 2;
// console.log(source);
// console.log(target);
// console.log(result);
// my guess:{a:{b:2}}
// in case of nested object Object.assign only copies the reference of nested object so any changes made in result,target is also applicable to source

//14.
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// console.log(result);
// console.log(target); //{a:[2,3,4]}
//my guess: {a:[2,3,4]}
//ans:{a:[2,3,4]}

//15.
// const target = { a: { b: 1 } };
// const source = { a: [2, 3, 4] };
// const result = Object.assign(target, source);
// target.a[2] = 90;
// console.log(result);
// my guess:{a:[2,3,90]}
// ans: {a:[2,3,90]}

//16.
// const target = { a: { b: { c: 1 } } };
// const source = { a: { b: { d: 2 } } };
// const result = Object.assign(target, source);
// result.a.b.d = 3;
// console.log(target);
// my guess:{a:{b:{d:3}}}
// ans:{ a: { b: { d: 2 } } }

//17.
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 
// };

// var student={
//     name:"David Rayy",
//     sclass:"VI",
//     rollno:12,
// };
// console.log(student);

// 18.Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// delete student.rollno;
// console.log(student);

//19.
// function operationObj(obj) {
//   obj = {...obj, c: 12}
// }
// let a = {  x: 34,  y: 56 }
// operationObj(a);
// console.log(a);
// my guess: {x:34,y:56} in this c will not be included in a because there is no direct modification 
// ans:{x:34,y:56}

//20.
// function operationObj(obj) {
//     obj.z = {...obj, c: 12}
//   }
//   let a = {
//     x: 34,
//     y: 56
//   }
//   operationObj(a);
//   console.log(a);
//   my guess: {x:34,y:56,c:12}
//   ans:{x:34,y:56,z:{x:34,y:56,c:12}}

// function myObj(obj1){
//     obj1={
//         x:34,
//         y:99,
//     };
// }
// let obj2={
//     a:23,
//     b:44,
// }
// let obj3=Object.assign(myObj,obj2);
// console.log(myObj);
// console.log(obj2);
// obj2.c=88;
// console.log(myObj);
// console.log(obj2);

// let obj1={a:66,b:77};
// let obj2={c:1,d:2};
// let obj3={e:3,f:4};
// let obj4={x:10,y:20};
// let obj5=Object.assign(obj1,obj2,obj3,obj4);
// // console.log(obj1);
// // console.log(obj2);
// // console.log(obj3);
// // console.log(obj4);
// // console.log(obj5);
// obj3.e=80;
// // console.log(obj1);
// obj1.a=99;
// // console.log(obj5);
// // console.log(obj1);
// console.log(obj2);


// let obj1=[1,2,3,4];
// let obj2={x : { y : 3 , z:{a : 1 } } };
// let obj3=Object.assign(obj2,obj1[0]);
// // console.log(obj4);
// // console.log(obj3);
// // console.log(obj2);
// // console.log(obj1);
// obj2.x.y=10;
// console.log(obj3);
// console.log(obj2,obj1);

// let obj1={a:[1,2,3,4]}
// let obj2={a:[5,6,7,8]}
// let obj3=Object.assign(obj2,obj1);
// console.log(obj1);
// console.log(obj3);

// let str="Hello";
// let obj1={ a : { b : 1, c: { d:4}}};
// let obj2={e:15,f:10};
// let obj3={x:[1,2,3]};
// Object.assign(obj2,str,obj1,obj3);
// console.log(obj2);
// console.log(obj1);
// // obj1.a.b=10;
// // obj3.x=[8];
// // console.log(obj2);
// // console.log(obj1 >= obj2);
// // console.log(obj1 && obj2);
// console.log(obj3>str);
// console.log(obj1==str);

// function myObj(obj1){
//     obj1={ x : 7 , y : { z : 10 } }
// };
// let str="Hello";
// let obj={a:50,b:60};
// let obj3=Object.assign(myObj,str,obj);
// obj.c=12;
// console.log(obj3);

// function assume(obj1,obj2){
//     return {...obj1,...obj2};
// }
// let obj1={a:15};
// let obj2={b:20};
// let obj3=Object.assign(obj1,obj2);
// obj3.a=20;
// console.log(obj1);

//21 Make a function that works as Object.assign() without using the in-built method. (make only for 2 arguments)
// function objectAssign(target,source){
//     for (let key in source) {
//         if (source.hasOwnProperty(key)) {
//           target[key] = source[key];
//         }
//       }
//       return target;
// };
// let obj1={a:1,b:2};
// let obj2={c:3,d:10};
// console.log(objectAssign(obj2,obj1)); //{ c: 3, d: 10, a: 1, b: 2 }
// console.log(objectAssign(obj1,obj2));//{ a: 1, b: 2, c: 3, d: 10 }

//23.a 
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1)
// console.log(arr2)

//b.
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// arr2[0].c = 5;
// obj1.c.f = 30;
// console.log(arr1); 
// console.log(obj1);

//c.
// let obj1 = { a: 23, b: 45, c: { f: 990 } };
// let arr1 = [{ ...obj1 }];
// let arr2 = arr1;
// obj1.c.f = 30;
// console.log(arr1); 
// console.log(arr2);

//d.
// let obj1 = { a: 23, b: 45 };
// let arr1 = Object.assign([], [{ ...obj1 }]);
// let arr2 = arr1;
// arr2[0].c = 5;
// console.log(arr1); 

//e.
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], arr1);
// arr2[0].c = 5;
// console.log(arr1); 

//f.
// let obj1 = { a: 23, b: 45 };
// let arr1 = [{ ...obj1 }];
// let arr2 = Object.assign([], [{...arr1[0]}]);
// arr2[0].c = 5;
// console.log(arr1); 

//g.
// let obj1 = { a: 34, b: 56, c: { h: 77, j: 90 } };
// let obj2 = Object.assign({}, obj1);
// let obj3 = Object.assign({ ...obj2 }, { c: { k: 44 } });
// obj2.c.h = 67;
// console.log(obj1, obj2, obj3);

// let obj1={a:12,b:16};
// let obj2={a:100,b:50,c:33,d:{e:12,f:18}};
// let obj3=[{...obj2,...obj1}];
// obj2.a=13;
// obj1.b=17;
// console.log(obj2);
// console.log(obj3);

