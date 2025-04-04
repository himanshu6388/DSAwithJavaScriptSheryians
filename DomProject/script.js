// Math.random()

// var num =Math.floor( Math.random()*100)
// console.log(num);


// var btn  = document.querySelector('button');
// var box = document.querySelector("#box")

// btn.addEventListener('click', function(){
//     var c1 = Math.floor( Math.random()*256)
//     var c2 = Math.floor( Math.random()*256)
//     var c3 = Math.floor( Math.random()*256)

//     box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`

// })



// var arr = ['Muskan',"Himanshu","Sakshi","Deepak","Virendra","Ankit","Awanish","Anurag"]

// var arr = ["CSK","DC","RR","GT","RCB","LSG","MI","SRH","PBKS"]
 let arr = [
    {
        team:"CSK",
        primary:'yellow',
        secondary:'grreen'
    },
    {
        team:"RCB",
        primary:'red',
        secondary:'grreen'
    },
    {
        team:"DC",
        primary:'red',
        secondary:'black'
    },
    {
        team:"KKR",
        primary:'purple',
        secondary:'golden'
    }
 ]

var btn = document.querySelector('button')
var h1 = document.querySelector('h1')

btn.addEventListener('click', function(){
    var num = Math.floor(Math.random()*arr.length)
    let winner = arr[num]
    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.primary
    h1.style.color = winner.secondary
})
