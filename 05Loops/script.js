//1.  Accept an integer and print hello world n time
for(i=1 ; i<=5; i++){
    //console.log(i+ ". Hello World");  // print hello world 5 times
}





//2.   Print natural numbers up to n
let n =5;
for  (let  i =n; i>=1; i--){
    // console.log(i)
}





//3.  Take a number as input and print its table
let num = 5;
for (let i=1; i<=10; i++){
    let mult = num*i;
    // console.log(num + " * " + i  +" = " + mult);
}




//4.  Sum up to n terms
let term = 5;
let sum = 0;
for (let i=1; i<=term; i++){
    sum += i
}
// console.log(sum)




//5.  Factorial of a Number
let x = 5;
let fact = 1;
for(let i=1;i<=x;i++){
    fact *= i;
}
// console.log(fact);





 
//6.   Print the sum of all even  & odd     numbers in a range seperately.
let m =  10;
let EvenSum = 0
let OddSum = 0;
for(let i=1;i<=m;i++){
    if(i%2 == 0){
        EvenSum += i;
    }else{
        OddSum += i;
    }
}
// console.log(EvenSum);
// console.log(OddSum);






//7.    print all the factos of a number.
let num1 = 13;
for(let i=1;i<=num1/2;i++){
    if(num1  % i == 0){
        // console.log(i);     
    }
}
// console.log(num1);




//8.   Check if the number is prime of not
let num2 = 17;
// let isPrime = true;
for(let i =2; i<=num2/2;i++){
    if(num2 % i ==0){
        isPrime = false
        break;
    }
}
// if(isPrime) console.log("Prime Number");
// else console.log("Not Prime Number");

let isPrime = isPrimeFun(11)
if(isPrime)  console.log("Prime NUmber");
else console.log("Not Prime Number");
function isPrimeFun(n){
    if(n<=1) return false
    if(n==2) return true
    if(n % 2==0) return false
    for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2){
        if(n  % i == 0) return false
    }
    return true
}



//9.   