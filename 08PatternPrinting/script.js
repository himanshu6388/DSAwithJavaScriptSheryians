const prompt = require('prompt-sync')()
// Pattern Printing
// console.log("*");

for(let i = 1; i<=6; i++){
    for(let j=1; j<i;j++){
        // process.stdout.write("* ")
    }
    // console.log("\n");
    
}





//1. Pattern
for(let i=1;i<=5;i++){
    for(let j=1;j<5;j++){
        // process.stdout.write("* ")
    }
    // console.log();
    
}
/*OutPut
* * * * 
* * * * 
* * * * 
* * * * 
* * * * 
*/





// 2. Pattern Printing
for(let i=1;i<=5;i++){
    for(let j=1;j<i;j++){
        // process.stdout.write("* ")
    }
    // console.log();
    
}
/* OutPut
*
* *
* * *
* * * *
*/






// 3. Pattern Printing
for(let i=1;i<=5;i++){
    for(let j=5;j>i;j--){
        // process.stdout.write("* ")
    }
    // console.log();
    
}
/* outPut
* * * * 
* * * 
* * 
* 
*/






//4. Pattern Printing
let n //  = prompt("Enter Number of rows:")
for(let i =1; i<=n;i++){
    for(let j=1;j<i;j++){
        // process.stdout.write("* ")
    }
    // console.log();
}
/*
* 
* * 
* * * 
* * * * 
*/






// 5.  Pattern Printing
let num // = prompt("Enter Number:");
for(let i=1;i<=num;i++){
    for(let j=1;j<i;j++){
        // process.stdout.write(j+" ")
    }
    // console.log();
    
}
/*
OutPut:
1 
1 2 
1 2 3 
1 2 3 4
*/






// 6. Pattern Printing
let temp = 5;
for(let i=1;i<=5;i++){
    for(let j=1;j<=temp; j++){
        // process.stdout.write("* ")
    }
    // console.log();
   temp-- 
}
/*
OutPut:
* * * * * 
* * * *
* * *
* *
*
*/