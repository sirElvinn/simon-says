let boxes = document.querySelectorAll('.box');

for(let box of boxes){
    box.addEventListener('click', function(){
        box.classList.toggle('max-opacity')
    })
}