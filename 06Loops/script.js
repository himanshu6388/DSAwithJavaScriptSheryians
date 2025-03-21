// Break and Continue

// Break
let n = 10;
for(let i =1; i<=n;i++){
    if(i==7) break
    // console.log(i)
}




// Continue
for(let i=1;i<=n;i++){
    if(i==4) continue
    // console.log(i);
    
}



//While loop
/*
declare/initialize
while(condition){
   code
}
*/
let x = 5;
let i= 1;
while(i<=x){
    // console.log("Hello  World");
    i++
}




// Sum of Digit
let num = 12345186;
let sum = 0
while(num>0){
   let rem = num % 10;
    sum = sum+rem;
    num = Math.floor(num/10);
}
// console.log(sum);




// Reverse of a number 
let num1  = 12392;
let rev = 0;
while(num1>0){
    rem = num1 % 10;
    rev = (rev * 10) + rem
    num1 = Math.floor(num1/10)
}
// console.log(rev);




// Atuomorphic Number
let num3 = 69;
let copy = num3;
let sq = num3 * num3;
let count = 0;
while(num3>0){
    count++;
    num3 = Math.floor(num3/10)
}
// if(sq % Math.pow(10, count) == copy) console.log("Automorphic Number");
// else console.log("No Automorphic Number");






// Switch Case Statement
let m = 0;
switch(m){
    case 1: console.log("Monday");
    break;
    case 2: console.log("Tuesday");
    break;
    case 3: console.log("Wednesday");
    break;
    case 4: console.log("Thursday")
    break;
    case 5: console.log("Friday");
    break;
    case 6: console.log("Saturday");
    break;
    case 7: console.log("Sunday");
    break;
    default: console.log("Enter Valid Value");
}