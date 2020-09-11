let canvas = document.querySelector('.canvas');
let n=200;
for(let i=0;i<n*n;i++){
    let pixel = document.createElement('div')
    canvas.appendChild(pixel);
    pixel.classList.add('pixel');
    pixel.style.height = `${100/n}%`
    pixel.style.width = `${100/n}%`

}
let pixels = document.querySelectorAll('.pixel');
pixels.forEach(px => {px.addEventListener('mouseover', function(e){
px.classList.add('touched')
})
    
});



