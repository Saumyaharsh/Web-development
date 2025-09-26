const output = document.querySelector('.output');
for(let i = 0;i<5; i++){
    const el = document.createElement('div');
    output.append(el);
    const btn = document.createElement('button');
    btn.textContent = `Click Me ${i+1}`;
    el.append(btn);
    const div = document.createElement('div');
    div.style.transition = 'Opacity 500ms';
    div.style.opacity = '1';
    div.textContent = `Counter ${i+1}`;
    el.append(div);
    div.addEventListener('click',()=>{
        if(div.style.opacity === '1'){
        div.style.opacity = '0';

        }else{
        div.style.opacity = '1';

        }

})
}
const fadefame = document.querySelectorAll('.fader');
fadefame.forEach((ele)=>{
    ele.style.transition = 'opacity 500ms';
    ele.style.opacity = '1';
    ele.addEventListener('click',(e)=>{
        ele.style.opacity = '0';
    })

})
