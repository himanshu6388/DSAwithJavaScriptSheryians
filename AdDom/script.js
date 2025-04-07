// 1 .getAttribute and setAttribut


// let img1 = document.querySelector("#img1")
// let  img2 = document.querySelector("#img2")
// let btn = document.querySelector("button")


// btn.addEventListener('click', function(){
//     var img1Src = img1.getAttribute('src')
//     var img2Src = img2.getAttribute('src')

//     img1.setAttribute('src', img2Src)
//     img2.setAttribute('src',  img1Src)
// })








// Creting an element
let h = document.createElement('h1')
h.innerHTML = "Hell How are you ? " 
let body = document.querySelector('body')
body.appendChild(h)