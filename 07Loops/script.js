// do while 
let i = 1;
do{
    // console.log("Hello world");
    i++
}while(i<=5);

let userInput = "no";
do{
    // console.log("Namaste");
    
}while(userInput == "yes")







// Guess the number
let ran = Math.floor(Math.random()*100)
// console.log(ran);
// let user = ""
// do{
//     user = "29"
//     if(isNaN(user) || user<0 || user >100){
//         console.log("Please enter valid number");
//         continue
//     }
//     if(user>ran) console.log("too  high, try again");
//     else if(user < ran) console.log("too low , try again");
//     else console.log("Congrats and Number was" + ran);
    
    
// }while(user !==ran);







// Sasta Calculator😊
let user = 'no'
do{
    let num1 = 4;
    let num2 = 4;
    let operator = "*"  //+ - / * 

    switch(operator){
        case '+':
            console.log(num1+num2);
            break;
        case "-":
            console.log(num1-num2);
            break;
        case "*":
            console.log(num1*num2);
            break;
        case "/":
            if(num2 !== 0) console.log(num1/num2);
            else console.log("Enter valid Nuumber");
            
        default:
            console.log("Please Enter valid operator");
            break;  
    }
}while(user === 'yes')
