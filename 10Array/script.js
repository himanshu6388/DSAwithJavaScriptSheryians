// strong number
const prompt = require('prompt-sync')();


let n//= Number(prompt("Enter a Number:"))
let copy = n;
let ans = 0;
while(n>0){
    let dig = n % 10;
    let fact = 1;
    for(let i=1;i<=dig;i++){
        fact = fact*i;
    }
    ans = ans + fact;
    n = Math.floor(n/10)
}
// if(copy == ans) console.log("Strong Number");
// else console.log("Not a Strong Number.");





// Implementation of array
let arr = [10,3,4,5,6,7,78,"name",5.4,true]

// Push element in arrray
arr.push(100)   // push element in last
// console.log(arr);
arr.pop()        // delete element from last of array
// console.log(arr);
arr.unshift(5)   // push element in start of array
// console.log(arr);
arr.shift()      // delete a element from start of array
// console.log(arr);
// console.log(arr.length)  ->> it show the  length of array





// Indexing in array ----> Start from 0 
let arr2 = [ 3,5,6]
// console.log(arr2[2]);
arr2[3] = 4;
// console.log(arr2);


let ar = new Array(4)
ar[0] = 1
ar[1] = 5
ar[2] = 4
ar[3] = 8

// console.log(ar);


let size// = Number(prompt("Enter array's size:"))
let sum = 0;
let ar1 = new Array(size)
for(let i = 0;i<ar1.length;i++){
    // ar1[i] = Number(prompt("Enter element:"))
    sum = sum + ar1[i]
}
// console.log(ar1);
// console.log(sum);





