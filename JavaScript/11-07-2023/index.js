// let arr = [0, 7, 5, 8, 7, 11, 10, 15, 20 ];
// let count = 0;

// function countArray() {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j =  1; j <= i; j++) {
//       if (arr[i] > arr[j - 1]) {
//         count++;
//       }
//     }
//     i++
//   }
//   console.log(count);
// }

// countArray();

// let arr = [0, 7, 5, 8, 7, 11, 10, 15, 20];
// let count = 0;

// const a = arr.reduce((acc, cur) => {
//     if (cur > acc) {
//         count++
//     }
//     return cur;
// }, -1)
// console.log(count)


// let arr = [0, 7, 5, 8, 7, 11, 10, 15, 20 ];
// let count = 0;
// let prev = -1;

// for(let i = 0 ; i < arr.length ; i ++) {
//   if(arr[i] > prev){
//     count ++ 
//   }
//   prev = arr[i];
// }
// console.log(count)

let arr = [0, 7, 5, 8, 7, 11, 10, 15, 20 ];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
        count++;
    }
}

console.log(count);