// let arr = [1,2,3,4,5];
// let k =2;
// k = k% arr.len
// for(let j=1;j<=k;j++){
//     let copy = arr[0]
//     for(let i=0;i<arr.length-1;i++){
//         arr[i]= arr[i+1]
//     }
//     arr[arr.length-1] = copy
// }

// console.log(arr);

 
// let arr = [1,2,3,4,5];
// let temp = new Array(arr.length)
// let k =2;
// k = k % arr.length
// for (let i=0;i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length]
// }

// console.log(temp);



// let arr = [1,2,3,4,5]
// let k = 2;
// k = k%arr.length;
// reverse(arr, 0, k-1);
// reverse(arr, k, arr.length-1)
// reverse(arr, 0, arr.length-1)
// console.log(arr);
// function reverse(arr,i, j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++;
//         j--;
//     }
// }


let arr = [10,5,3,15,19,69,20];
let target = 19;
for(let i=0;i<arr.length;i++){
    if(arr[i]==target){
        index = i;
        break
    }
}
if(index == -1) console.log("Elelment Not found.");
else console.log("Elelment found at " + index);

