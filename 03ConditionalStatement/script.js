// Check the given year is leap year or not
/*
let year = 2024
if(year % 4 ==0 ){
    console.log(year  +" is Leap year.")
}else{
    console.log(year+ " is not a Leap year.")
}
*/
/*
let year = 2024;
if(year%4==0){
    if(year % 100 == 0){
        if(year%400 == 0) isLeap = true
        else isLeap = false
    }else{
        isLeap = true
    }
}else isLeap = false

console.log(isLeap)
*/









// Shoop discount - Description on Graphic
/*
let amount  = 10000;
if(amount >= 0 && amount <=5000){
    console.log(amount)
}else if(amount>5000 && amount <=7000){
    console.log(amount - (5*amount)/100)
}else if(amount>7000 && amount <=9000){
    console.log(amount - (10*amount)/100)
}else if(amount>9000){
    console.log(amount - (20*amount)/100)
}else{
    console.log("invalid input")
}

*/








// Calculate unit
/*
let unit = 250;
let amount = 0;
if(unit> 0 && unit<=100){
    amount = unit*4.2;
}else if(unit >100 && unit <=200){
    amount = 100*4.2 + (unit -100)*6;
}else if(unit>200 && unit<=400){
    amount = 100*4.2 + (100*6)+(unit-200) *8
}else if(unit>400){
    amount = (100*4.2) +(100*6) +200*8 +(unit-400) * 13;
}

console.log(amount)
*/

/*
let unit = 700;
let amount = 0;
if(unit>400){
   amount = (unit-400) * 13
   unit = 400
}
if(unit >200 && unit <=400){ 
    amount = amount + (unit - 200) * 8;
    unit = 200;
}
if(unit > 200 && unit<=200){
    amount = amount + (unit-100)*6;
    unit = 100
}
amount = amount + unit * 4.2
console.log(amount)

*/










// Loops
