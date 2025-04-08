// var arr = [10,"Hello",30,true,50,60.45,70]
let arr = [
    {
        user:"Himanshu",
        age:30,
        married:false,
        image:'https://static.vecteezy.com/system/resources/previews/023/842/246/non_2x/boy-cartoon-character-cute-funny-illustration-eps-10-free-vector.jpg'
    },
    {
        user:'hira',
        age:40,
        image:'https://t4.ftcdn.net/jpg/01/13/99/57/240_F_113995750_dAEGvjqxnsYD6asKjeDWJoVoSqjFvdGO.jpg'
    },
    {
        user:"salmon",
        age:65,
        married:false,
        image:'https://cdn.britannica.com/54/256354-050-C19887AD/bollywood-actor-salman-khan-at-nika-mukesh-ambani-cultural-center-nmacc-mumbai-india.jpg?w=300'
    },
    {
        user:"Shahrukh",
        age:60,
        married:true,
        image:'https://bizrahmed.com/wp-content/uploads/2024/04/Shah-Rukh-Khan3-1.webp'
    }
]

// arr.forEach((e, idx)=>{
//     console.log(e, idx);
    
// })

// var sum= 0

// arr.forEach((elem)=>{
//    sum = sum+ elem.age
// })
var sum =''
arr.forEach((elem)=>{
    sum = sum + ` <div class="card">
        <img src=${elem.image} alt="">
        <h1>${elem.user}</h1>
        <h5>${elem.age}</h5>
        <h4>${elem.married}</h4>
    </div>`
})


document.body.innerHTML = sum