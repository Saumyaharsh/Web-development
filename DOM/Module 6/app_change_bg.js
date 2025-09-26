const main = document.querySelector('.main');
const btn = document.createElement('button');
btn.textContent = 'Click Me';
main.append(btn);

btn.addEventListener('click',()=>{
const bgbody = document.body.style;
if(bgbody.backgroundColor == 'red'){
    bgbody.backgroundColor = 'white';
}else{
    bgbody.backgroundColor = 'red';
}
})