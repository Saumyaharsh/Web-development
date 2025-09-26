const main = document.querySelector('.main');
main.style.backgroundColor = 'red';
main.style.width = '100%'
main.style.height = '200px'
const img = document.createElement('img');
img.src = './images/img1.jpg';
img.style.display = 'none';
const btn = document.createElement('button')
btn.textContent = 'Click to toggle';
main.append(btn)
main.append(img);
btn.addEventListener('click',()=>{
    console.log('clicked');
    img.style.display = img.style.display === 'none'?'block':'none';
})