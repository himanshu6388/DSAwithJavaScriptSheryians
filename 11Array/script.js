let arr = [1, 2,3, 4,5,6];

// Second max element  from array

let max = Math.max(arr[0], arr[1])
let smax = Math.min(arr[0], arr[1]);

for(let i=2;i<arr.length;i++){
    if(arr[i]>max){
        smax = max;
        max = arr[i]
    }else if(arr[i]>smax && arr[i] !=max){
        smax = arr[i]
    }
}
// console.log("Secod Max:" +smax);





// Second Min Element
let min = Math.max(arr[0], arr[1]);
let smin = Math.min(arr[0], arr[1]);

for(let i=1;i<arr.length;i++){
    if(arr[i]< min){
        smin = min;
        min = arr[i]
    }else if(arr[i]<smin && arr[i] !=min){
        smin = arr[i]
    }
}
// console.log("Second min:" +smin);






// Reverse the array
let temp = new Array(arr.length)
let i =0;
for(let j=arr.length-1;j>=0;j--){
    temp[i] = arr[j];
    i++;
}
// console.log(temp);
let m =0; 
let n = arr.length-1;
while(m<n){
    let temp = arr[m];
    arr[m] = arr[n];
    arr[n] = temp;
    m++;
    n--;
}
// console.log(arr);









// Array left rotation by 1
let arr1 =  [1,2,3,4,5]
let tp = arr1[0]
for(let i=0;i<arr1.length-1;i++){
    arr1[i] = arr1[i+1]
}
arr1[arr1.length-1] = tp
console.log(arr1);



