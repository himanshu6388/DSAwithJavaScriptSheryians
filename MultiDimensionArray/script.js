// Multidimension Array

let arr = [
    [1,2,3],
    [4,5,6,10],
    [7,8,9,9]
]

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        // process.stdout.write(`${arr[i][j]}`)
    }
    console.log();
    
}

let ar = [
    [1,2,3],
    [4,5,6],
    [12,8,9]
]

let leftsum = 0, rightsum = 0
for(let i=0;i<ar.length;i++){
    for(let j=0;j<ar[i].length;j++){
        if(i==j) leftsum += ar[i][j];
        if(i+j==ar.length-1) rightsum += ar[i][j]
    }
}
console.log("Left sum "+ leftsum)
console.log("Right sum "+ rightsum)