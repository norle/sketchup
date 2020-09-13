let canvas = document.querySelector('.canvas');
let n

function createGrid(){
for(let i=0;i<n*n;i++){
    let pixel = document.createElement('div')
    canvas.appendChild(pixel);
    pixel.classList.add('pixel');
    pixel.style.height = `${100/n}%`
    pixel.style.width = `${100/n}%`

}
}
function setListeners(){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(px => {px.addEventListener('mouseover', function(e){
    px.classList.add('touched')
    })  
    });
    }

function clearCanvas(){
    let clear = document.querySelectorAll('.touched')
    clear.forEach(cl => cl.classList.remove('touched'));

}
function deleteGrid(){
    let del = document.querySelectorAll('.pixel');
    del.forEach(dl => dl.remove())
}
function start(){
deleteGrid();
n = document.forms["grid"]["ngrid"].value;
console.log(n)
createGrid();
setListeners();


}



