//................................01................................//
// const names  = [
//     {first_name: "Handnm", last_name: "L demo"},
//     {first_name: "Q Wei", last_name: "Alxezx"},
//     {first_name: "Pqwern", last_name: "Ruse"},
//     {first_name: "Wiruyn", last_name: "Ruby"},
//     {first_name: "Erpso", last_name: "Loal"},
//     {first_name: "Demors", last_name: "Poet"},
//     {first_name: "Aleos", last_name: "Lkeu"},
// ]
// //     Write a code that adds new key in each object named 
// //     full_name: first_name + last_name
// function fullName(names){
//     names.forEach(name=>{
//         name.full_name=name.first_name+name.last_name;
//     })
// }  
// fullName(names);
// console.log(names);

//.............................02..................................//
// const users  = [
//     {first_name: "Handnm", last_name: "L demo", age: 17},
//     {first_name: "Q Wei", last_name: "Alxezx", age: 30},
//     {first_name: "Pdeq Twern", last_name: "Ruse", age: 22},
//     {first_name: "Widfruyn", last_name: "Ruby", age: 11},
//     {first_name: "Erdfg Pso", last_name: "Loal", age: 34},
//     {first_name: "Dedfgmors", last_name: "Poet", age: 60},
//     {first_name: "Ale4tos", last_name: "Lkeu", age: 16},
// ]
// //Write a code that adds new key in each object named : isMature
// function isMature(users){
//     let result=users.map((value)=>{
//         if(value.age>=18){
//            return value.is_mature="Yes";
//         }
//         else{
//             return value.is_mature="No";
//         }
//     })
//     return result;
// }
// isMature(users);
// console.log(users); 

//...................................04...............................//
// const nestedArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// let result=nestedArray.flat();
// for(let i=0;i<result.length;i++){
//     console.log(result[i]);
// };

//...................................05................................//
// => print all items of this object in line 
// const nestedObject = {
//     name: "Vishal Kukreja",
//     age: 32,
//     address: {
//       street: "123 Mumbai fashion St",
//       city: "Midtown",
//       state: "MH",
//     },
//     hobbies: ["reading", "drawing", "gardening"],
// };
// function nestedArray(){
//     let result=Object.entries(nestedObject).map(([key,value])=>{
//         if(typeof value==='object'){
//             console.log(key+':'+value);
//         }
//         else{
//             console.log(key+':'+value);
//         }
//     })
//     return result;
// }
// nestedArray(nestedObject);

//................................06................................//

// Write a program to check if an array contains any number (strictly) or not.
// Input:  [1,2,3] => true
// [“1”, “a”, “h”] => false
// [“a”, 3, “gh”] => true
// [“a”, ‘3df’, “gh”] => false

// function arrayContainsNum(num){
//     return num.some(value => value === Number(value));
// }
// console.log(arrayContainsNum([1,2,3]));  //true
// console.log(arrayContainsNum(["1","a","h"]));  //false
// console.log(arrayContainsNum(["a",3,"h"]));  //true
// console.log(arrayContainsNum(["a","3df","gh"])); //false

//...............................07..................................//
// const numbers = [1, 2, 3, 4];
// console.log(numbers.map(String));  //[ '1', '2', '3', '4' ]

//...............................08.................................//
// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map((num, index, array) => {
//   array.push(num * 2);
//   return num * 2;
// });
// console.log(numbers, doubled);

//..............................09.................................//
// let donut = [
//     {
//         "id": "0001",
//         "type": "donut",
//         "name": "Cake",
//         "ppu": 0.55,
//         "batters":
//         {
//             "batter":
//                 [
//                     { "id": "1001", "type": "Regular" },
//                     { "id": "1002", "type": "Chocolate" },
//                     { "id": "1003", "type": "Blueberry" },
//                     { "id": "1004", "type": "Devil's Food" }
//                 ]
//         },
//         "topping":
//             [
//                 { "id": "5001", "type": "None" },
//                 { "id": "5002", "type": "Glazed" },
//                 { "id": "5005", "type": "Sugar" },
//                 { "id": "5007", "type": "Powdered Sugar" },
//                 { "id": "5006", "type": "Chocolate with Sprinkles" },
//                 { "id": "5003", "type": "Chocolate" },
//                 { "id": "5004", "type": "Maple" }
//             ]
//     },
//     {
//         "id": "0002",
//         "type": "donut2",
//         "name": "Raised",
//         "ppu": 0.55,
//         "batters":
//         {
//             "batter":
//                 [
//                     { "id": "1001", "type": "Regular" }
//                 ]
//         },
//         "topping":
//             [
//                 { "id": "5001", "type": "None" },
//                 { "id": "5002", "type": "Glazed" },
//                 { "id": "5005", "type": "Sugar" },
//                 { "id": "5003", "type": "Chocolate" },
//                 { "id": "5004", "type": "Maple" }
//             ]
//     },
//     {
//         "id": "0003",
//         "type": "donut3",
//         "name": "Old Fashioned",
//         "ppu": 0.55,
//         "batters":
//         {
//             "batter":
//                 [
//                     { "id": "1001", "type": "Regular" },
//                     { "id": "1002", "type": "Chocolate" }
//                 ]
//         },
//         "topping":
//             [
//                 { "id": "5001", "type": "None" },
//                 { "id": "5002", "type": "Glazed" },
//                 { "id": "5003", "type": "Chocolate" },
//                 { "id": "5004", "type": "Maple" }
//             ]
//     },
//     {
//         "id": "0004",
//         "type": "donut1",
//         "name": "Old Fashioned",
//         "ppu": 0.55,
//         "batters":
//         {
//             "batter":
//                 [
//                     { "id": "1001", "type": "Regular" }
//                 ]
//         },
//         "topping":
//             [
//                 { "id": "5001", "type": "None" },
//                 { "id": "5002", "type": "Glazed" },
//                 { "id": "5003", "type": "Chocolate" },
//                 { "id": "5004", "type": "Maple" }
//             ]
//     }
// ]
// => filter donuts based on which have topping  Chocolate
// function chocolate(donut){
//     let result=donut.filter((item)=>{
//         return item.topping.some((topping)=>{
//             return topping.type==="Chocolate";
//         });
//     })
//     return result;
// }
// console.log(chocolate(donut));

//=> filter donuts based which have batter type is regular and topping have Chocolate
// function regular(donut){
//     let result=donut.filter((item)=>{
//         return(
//             item.batters.batter.some((batter)=>batter.type==="Regular") &&
//             item.topping.some((topping)=>topping.type==="Chocolate")
//         )
//     })
//     return result;
// }
// console.log(regular(donut))

//=> filter donuts based on which have topping chocolate and Sugar
// function topping(donut) {
//     let result = donut.filter((item) => {
//       return item.topping.some((toppingItem) => {
//         return toppingItem.type === "Chocolate" || toppingItem.type === "Sugar";
//       });
//     });
//     return result;
// }
// console.log(topping(donut));

//=> filter donuts based on ppu > 0.5
// function ppu(donut){
//     let ppu = donut.filter((value, index, array) => value.ppu>0.5 );
//     return ppu;
// }
// console.log(ppu(donut));

//=> bring all batters for all donuts in single array
// function abc(donut) {
// 	for (let key in donut){
// 		if(typeof donut[key]!='object'){
// 			console.log(donut[key]);
// 		}
// 		else{
// 			abc(donut[key]);
// 		}
// 	}
// }
// abc(donut);

//=> filter donuts based on which have 2 and more than 2 batter in it
// function batter(donut){
//     let result=donut.filter((value)=>{
//         return value.batters.batter.length>=2;
//     })
//     return result;
// }
// console.log(batter(donut));

//....................................10...................................//
// function getInitials(name){
//     let names=name.split(" ");
//     let initials="";
//     for(let index in names){
//         let result = names[index].charAt(0).toUpperCase(0);
//         initials+=result;
//     }
//     return initials;
// }
// let full_name="George Raymond Richard Martin";
// let output=getInitials(full_name);
// console.log(output);//GRRM

//...................................12....................................//
// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
// ];
// function getCategory(products){
//     let result=products.reduce((accu,cur)=>{
//         let category=cur.category;
//         accu[category]=(accu[category]||0) + 1;
//         return accu;
//     },{})
//     return result;
// }
// console.log(getCategory(products))

// function getCategory(products) {
//     let result = [];
//     for (let product of products) {
//       let category = product.category;
//       let existingCategory = result.find(item => item.category === category);

//       if (existingCategory) {
//         existingCategory.totalPrice += product.price;
//         existingCategory.count++;
//       } else {
//         result.push({ category: category, totalPrice: product.price, count: 1 });
//       }
//     }
//     for (let categoryObj of result) {
//       categoryObj.average = categoryObj.totalPrice / categoryObj.count;
//       delete categoryObj.totalPrice;
//       delete categoryObj.count;
//     }
//     return result;
// }
// console.log(getCategory(products));

//......................................13..................................//
// const employees = [
//     { name: "John", salary: 50000, department: "IT" },
//     { name: "Jane", salary: 60000, department: "HR" },
//     { name: "Bob", salary: 55000, department: "IT" },
//     { name: "Sophie", salary: 75000, department: "HR" },
//     { name: "Mike", salary: 65000, department: "IT" },
//     { name: "Emily", salary: 80000, department: "HR" },
//     { name: "David", salary: 70000, department: "IT" },
// ];
//13[a]
// function getEmployees(employees){
//     let result=employees.reduce((accu,cur)=>{
//         let department=cur.department;
//         accu[department]=accu[department] || [];
//         accu[department].push(cur);
//         return accu;
//     },[])
//     let averageDepartment=[];
//     let departments=Object.keys(result)
//     for(let i=0;i<departments.length;i++){
//         let department=departments[i];
//         let departmentEmployees=result[department];
//         let totalSalary=departmentEmployees.reduce((accu,cur)=>{
//             return accu + cur.salary
//         },0)
//         let averageSalary=totalSalary/departmentEmployees.length;
//         averageDepartment.push({Department:department,AverageSalary:averageSalary})
//     }
//     return averageDepartment;
// }
// console.log(getEmployees(employees));

//13[b]
// function categorize(employees) {
//     let result = {};
//     for (let i = 0; i < employees.length; i++) {
//         let employee = employees[i];
//         let department = employee.department;
//         result[department] = result[department] || [];
//         result[department].push(employee.salary);
//     }
//     return result;
// }
// console.log(categorize(employees));

//.................................14..............................//
// let names= ["Jeel" , "Prakhar" , "Bhakti" , "Vansh" , "Meghna", "Bhaumik", "Pujan" , "Rudra" , "Sachin" , "Dhruval"]
// let obj={};
// function groupNames(names){
//     names.forEach((name)=>{
//         let firstLetter=name.charAt(0);
//         obj[firstLetter]=obj[firstLetter] || [];
//         obj[firstLetter].push(name);
//     })
// }
// names.push("Jay");
// groupNames(names);
// console.log(obj);
