// var arr = [10,"Hello",30,true,50,60.45,70]
let arr = [
    {
        user:"Himanshu",
        age:30,
        married:false
    },
    {
        user:'hira',
        age:40
    },
    {
        user:"salmon",
        age:65,
        married:false
    },
    {
        user:"Shahrukh",
        age:60,
        married:true
    }
]

// arr.forEach((e, idx)=>{
//     console.log(e, idx);
    
// })

var sum= 0

arr.forEach((elem)=>{
   sum = sum+ elem.age
})
console.log(sum);
