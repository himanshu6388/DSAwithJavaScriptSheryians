// DOM  - > Document Object Model
// 4 Pillar of js
// 1. Selection of Element  ✅
// 2. Changing HTML         ✅
// 3. Changing CSS          ✅
// 4. Event Listener


var h1  = document.querySelector('h1')


h1.addEventListener('click', function(){
    h1.innerHTML = `Hello ! How are you ?.`
h1.style.color = 'white'
h1.style.backgroundColor = 'green'

})