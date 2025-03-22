const prompt = require('prompt-sync')()
// 1.  Pattern Printing

for(let i=1;i<=5;i++){
    let temp = 65;
    for(let j=1;j<=i;j++){
        // process.stdout.write(String.fromCharCode(temp)+" ")
        temp++
    }
    // console.log();
}
/*
OutPut:
A 
A B 
A B C 
A B C D 
A B C D E 
*/






// 2.   Mirror Right Angle Trangle
let n = prompt("Enter Nuber:")
for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i;j++){
        // process.stdout.write("  ")
    }
    for(let j=1;j<=i;j++){
        // process.stdout.write("* ")
    }
    // console.log();
    
}
/*
OutPut:
     * 
      * *
    * * *
  * * * *
* * * * *
*/





// 3. Trangle
let num = prompt("Enter Number:")
for(let i=1;i<=num;i++){
    for(let j=1;j<=n-i;j++){
        // process.stdout.write(" ")
    }
    for(let j=1;j<=i;j++){
        // process.stdout.write("* ")
    }
    // console.log();
    
}
/*
OutPut:
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
*/



// 4.  X shape 
let n1 = Number(prompt("Enter odd number:"));
for(let i=1;i<=n1;i++){
    for(let j=1;j<=n1;j++){
        if(i==j || i+j === n1+1){
            // process.stdout.write("* ")
        }else process.stdout.write("  ")
    }
    // console.log();
    
}
/*
OutPut:
*       * 
  *   *
    *
  *   *
*       *
*/






// 5.  V shape
let n2 = Number(prompt("Enter odd number:"));
for(let i=1;i<=n2;i++){
    for(let j=1;j<=(n2*2);j++){
        if(i==j || i+j === n2*2){
            // process.stdout.write("* ")
        }else process.stdout.write("  ")
    }
    // console.log();
    
}
/*
OutPut:

*                   *   
  *               *     
    *           *       
      *       *
        *   *
          *
*/



// Array Introduction -->  Array is a linear data structure its a collection of elements.  its can be different datatype element in array . example ->
let arr = [12,3,2,4,5,"Hello",true,5.3]

