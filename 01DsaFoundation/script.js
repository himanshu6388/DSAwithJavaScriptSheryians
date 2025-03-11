
//integer - 4 ,33,44,32 in javascript we called number
let x = 12;
let y =13;
//console.log(x+y)
/*
string + string = string(concatenation)
string + int = string
int + int = int(Arithmatic operations)
*/
// let a = "hello"
// let b = "world"
// console.log(typeof(a+b)) //string

let c = 10;
let d = 10;
//console.log(typeof(c+d)) // number

let a = 23;
let b = 45;
//console.log("sum of" + a + "and " + b + "is:" +( a+b));
//"sum of 23" + "and" +b + "si" + a+b
// "sum of  23 and "+b"is"+a+b

//console.log(a+b +  "is sum of "+ a + "and" +b); //68




//type coercion
//console.log(1 + "1") //11
//console.log(1 + 1) //2
//console.log(1 -1 ); // 0
//console.log(1 - "1"); // 0


// dynamic value

let age = 12;
//console.log(age);






// Swap two variable via 3 methods

let aa = 10;
let bb = 20;

let temp = aa;
aa = bb;
bb = temp;
//console.log(aa, bb)  // aa =20 bb =10

aa = aa + bb; // aa = 30
bb = aa - bb; // bb =10
aa = aa - bb; //aa =20
//console.log(aa, bb)  // aa = 10 bb = 20

let xx = 2;
let yy = 4;

[xx, yy] = [yy, xx];
//console.log("xx: "+xx,"YY :"+ yy); //xx = 4 , yy =2





// Conditional Operators 

// console.log(10%2); // 0 
// console.log(10/2); // 5
// console.log(Math.floor(10/3)); // 3
// console.log(10  > 3) // true
// console.log(10  < 3) // false
// console.log(10<=10); // true
// console.log(10 == 10) // true
// console.log(10 == 10) // false
// console.log(10 === 10) // true
// console.log(10 === "10") // false





// Logical Operators

// console.log(10> 8 && 19>5 && 17> 7) // true
// console.log(10> 18 && 19>5 && 17> 7) // flase
// console.log(10 > 18 || 19 > 5); //  true







// Uniary Operator 
//1 - Increment - Pre Increment Post Increment
//2 - Decrement - Pre Decrement Post Decrement
let  aaa = 10
aaa-- // Post Decrement
// console.log(aaa); // 9  
aaa++  //  Post Increment
// console.log(aaa); // 10
--aaa // Pre Decrement
// console.log(aaa) // 9


let bbb = 12;
bbb--  // Post Decrement
// console.log(bbb) // 11
++bbb   // Pre Increment
// console.log(bbb)  // 12
--bbb  // Pre Decrement
// console.log(bbb)  // 11

let m = true;
m++ 
// console.log(m) // 2
 











