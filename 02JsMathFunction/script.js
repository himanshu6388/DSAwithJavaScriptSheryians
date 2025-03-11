//   Math Functions


//Math.ceil function
let a = 11.4;
// console.log(Math.ceil(a))

//Math.floor function
let b = 11.6;
// console.log(Math.floor(b))

//Math.round function
let c = 10.4 
// console.log(Math.round(c)) //10
let d = 10.5;
// console.log(Math.round(d)) // 11

// Math.abs
// console.log(Math.abs(-8)) // 8

// Math.trunc
// console.log(Math.trunc(10.3345454)) // 10

// Math.pow()
// console.log(Math.pow(5, 2))  // 25 

// Math.sqrt()
// console.log(Math.sqrt(36)) // 6
// console.log(Math.sqrt(40)) // 6.32455
 

// Math.cbrt()
// console.log(Math.cbrt(125))  // 5 

// Math.max()
// console.log(Math.max(10, 34, 56, 32, 89)) // 89  

// Math.min()
// console.log(Math.min(34, 21,39.21)) // 21

// Math.random()
// console.log(Math.random()) // random value between 0 to 1

let e = 233.483884
// console.log(e.toFixed(2)) // 233.48







// A  = P * (1 + r/100)^t 
// cp = compound interest
// p = principle
// r= rate
// t = time
let p = 1000;
let r = 5;
let t = 3;
 //CP = A -P
// console.log(p*Math.pow(1+r/100, t)- p) // 157.625000






// Genrate OTP
// 0 to 9000
// console.log(Math.floor(Math.random() * 9000 + 1000)) 







//Area of trangle by heron's formula
let f = 3;
let g = 4;
let h = 5;
let s = f +g +h;
// s * (s-a)*(s-b)*(s-c)
 
if(f+g <= h || f+h <=g || h+g <=f ){
    console.log("Not Possible")
}else{
     let  s = (f+g+h)/2
    //  console.log(Math.sqrt(s*(s-f)*(s-g)*(s-h))) // 6
}





//Circumeference of Circle
let ra = 5;
// console.log(2* Math.PI * ra)






// Conditional statements

/*
if(10> 9){
    console.log("true")
}else if(30 <20){
    console.log(:"true")
}else{
    console.log("false")
}
*/


// print greatest number of two number

// let i = 5;
// let j = 45;
// if(i > j){
//     console.log(i+ " is Greatest")
// }else{
//     console.log(j+" is Greatest")
// }







// Check number is even or odd

// let i = 4;

// if(i %2 ==0 ){
//     console.log("even")
// }else{
//     console.log("odd")
// }








// Accept name and age from the user . Check if the user is a valid voter or not

// let age = 19;
// let name = "Himanshu"

// if(age >= 18){
//     console.log(name + " yes you are a valid voter")
// }else{
//     console.log(name + " You are not a valid voter")
// }







//Accept three number and print the greatest among them
// let i = 5;
// let j = 13;
// let k = 20;
// if(i>j){
//     console.log(i+ " is Greatest.")
// }else if(j>k){
//     console.log(j+ " is Greatest.")
// }else{
//     console.log(k+ " is Greatest.")
// }






// Check Entered year is leap year or not

// let year = 2020;
// if(year % 4 == 0) {
//     console.log(year+ " is Leap Year.")
// }else{
//     console.log(year+ " is not Leap year.")
// }






// 