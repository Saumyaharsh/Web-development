const div = document.querySelector('div');
console.log(div)
div.innerHTML = '';
const output = document.createElement('div');
div.append(output);
const ul = document.createElement('ul');
div.append(ul);
const btn = document.createElement('button');
const holder = [];
btn.textContent = 'Reset Colors';
btn.style.display = 'block';
div.append(btn);
btn.onclick = (e)=>{
    holder.forEach((ele)=>{
        ele.style.backgroundColor = ranColor();
    })
}

for(let i = 0; i<10; i++){
    const ele = document.createElement('div');
    holder.push(ele);
    ele.style.width = '50px';
    ele.style.height = '50px';
    ele.style.border = '1px solid #ddd';
    ele.style.display = 'inline-block';
    ele.style.lineHeight = '50px';
    ele.style.textAlign = 'center';
    ele.textContent = `${i+1}`;
    ele.style.backgroundColor = ranColor();
    ele.addEventListener('click',()=>{
        document.body.style.backgroundColor = ele.style.backgroundColor;
    });
   ele.addEventListener('mouseover',()=>{
    logger(`mouse Over ${i+1}`);
   });
   ele.addEventListener('mouseleave',()=>{
    logger(`mouseleave ${i+1}`);
   })
   ele.addEventListener('mouseout',()=>{
    logger(`mouseout ${i+1}`);
    
   })
   ele.addEventListener('mouseup',()=>{
    logger(`mouseup ${i+1}`);
    
   })
   ele.addEventListener('mousedown',()=>{
    logger(`mousedown ${i+1}`);
    
   })
   ele.addEventListener('mouseenter',()=>{
    logger(`mouseenter ${i+1}`);
    
   })

    div.append(ele);
};
for(let i = 0; i<10; i++){
    const ele = document.createElement('input');
    ele.style.display = 'block';
    ele.setAttribute('type','text');
    ele.value = `${i+1} Input value`;
    div.append(ele);
    ele.onfocus = ()=>{
        ele.style.color = 'red';
    }
    ele.addEventListener('focusout',()=>{
        ele.style.color = 'black';
    })
    ele.onchange = ()=>{
        ele.style.backgroundColor = 'blue';
    
    }
    ele.onkeydown = (e)=>{
        if(e.key==='Enter'){
            adder(ele.value);
            console.log(ele.value);
        }
    }
}
document.addEventListener('keydown',tracker)
document.addEventListener('keyup',tracker)
function adder(val){
    const li = document.createElement('li');
    li.textContent = val;
    ul.append(li);
}
function tracker(e){
    console.log(e.key);
}
function logger(val){
console.log(val)
output.innerHTML = val;
}
function updatecolor(){
    document.body.style.backgroundColor = ranColor();
}
function ranColor(){
    return `#${Math.random().toString().slice(2,8)}`;
}