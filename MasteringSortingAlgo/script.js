// Sorting Algorithm
let arr = [1,4,5,3,2,9,10];
// let  n = arr.length
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<n-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1]
//             arr[j+1] = temp
//         }
//     }
// }
// console.log(arr);

// Selection Sort
for(let i=0;i<arr.length-1;i++){
    let small  = i
    for(let j=i+1;j<arr.length;j++){
        if(arr[small]>arr[j]){
            small = j
        }
    }
    if(i != small){
        let temp = arr[i]
        arr[i] = arr[small]
        arr[small] = temp
    }
}

// console.log(arr);

// Insertion Sort
let ar = [2,10,33,23,8,4,3,6]
for(let i =1;i<ar.length;i++){
    let  key = ar[i]
    let j = i-1;
    while(j>=0 && ar[j]>key){
        ar[j+1] = ar[j]
        j--
    }
    ar[j+1] = key
}
console.log(ar);
