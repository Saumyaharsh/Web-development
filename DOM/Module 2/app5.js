const output = document.querySelector('div')
console.log(output);
output.innerHTML = ``;
const out1 = document.createTextNode('Hello');
const out2 = document.createTextNode('World');
output.append(out1);
output.append(out2);
out1.textContent = 'Saumya';
out2.textContent = 'Harsh';
const myinput1 = document.createElement('input');
output.append(myinput1);
myinput1.setAttribute('type','text');
myinput1.setAttribute('name','first');
myinput1.setAttribute('placeholder','firstname');
myinput1.style.display = 'block';
myinput1.value = 'Laurence';
const myinput2 = document.createElement('input');
output.append(myinput2);
myinput2.setAttribute('type','number');
myinput2.setAttribute('min',1);
myinput2.setAttribute('max',10);
myinput2.value = '5';
const myinput3 = document.createElement('input');
output.append(myinput3);
myinput3.setAttribute('type','date');
const myinput4 = document.createElement('input');
output.append(myinput4);
myinput4.setAttribute('type','color');
myinput4.style.display = 'block';
myinput3.style.display = 'block';
myinput2.style.display = 'block';

const label1 = document.createElement('label');
label1.setAttribute('for','sel');
label1.textContent = 'My list';
label1.style.display = 'block';
output.append(label1);
const sel1 = document.createElement('select');
sel1.id = 'sel';
sel1.setAttribute('multiple','');
sel1.setAttribute('size','3')
output.append(sel1);
for(let i = 0; i<15; i++){
    const op = document.createElement('option');
    op.textContent = `${i+1} Option`
    sel1.append(op);
}
const btn = document.createElement('button');
btn.textContent = 'List me';
btn.style.display = 'block';
output.append(btn);

btn.addEventListener('click',listitems);
const ul = document.createElement('ul');
output.append(ul);
for(let i = 0; i<5; i++){
    const radio = document.createElement('input');
    radio.setAttribute('type','radio');
    radio.setAttribute('name','Radiobuttons');
    radio.value = `${i+1} Selection`;
    radio.id = `r${i+1}`;
    const label1 = document.createElement('label');
    label1.textContent = `${i+1} Selection`;
    label1.setAttribute('for',`r${i+1}`);
    output.append(label1);
    output.append(radio);

}
const btn1 = document.createElement('button');
btn1.textContent = 'Get Radios';
btn1.style.display = 'block';
output.append(btn1)
const output1 = document.createElement('div');
output.append(output1);
btn1.addEventListener('click',getradios);
function getradios(){
const val1 = document.querySelector('input[name="Radiobuttons"]:checked');
console.log(val1.value);
}
function listitems(){
    const eles = sel1.querySelectorAll('option:checked');
    console.log(eles);
    ul.innerHTML = '';
    eles.forEach((ele)=>{
        console.log(ele.textContent);
        const li = document.createElement('li');
        li.style.color = myinput4.value;
        ul.append(li);
        li.textContent = ele.textContent;

    })

}

