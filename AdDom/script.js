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
// let h = document.createElement('h1')
// h.innerHTML = "Hell How are you ? " 
// let body = document.querySelector('body')
// body.appendChild(h)


// let img = document.createElement('img');
// img.setAttribute('src','https://images.unsplash.com/photo-1619806101997-a17bbb1fa2d8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyMzgzNzY3fHxlbnwwfHx8fHw%3D')
// img.style.width = '200px'
// document.body.appendChild(img)



let  btn = document.querySelector('button')
document.createElement('img')
let body  = document.querySelector('body')

btn.addEventListener('click', function(){
   let img = document.createElement('img')
   img.setAttribute('src',"https://images.unsplash.com/photo-1647725280666-bb7f94a15d69?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyMzgzNzY3fHxlbnwwfHx8fHw%3D")

   img.style.height = '200px'
   body.appendChild(img)
})