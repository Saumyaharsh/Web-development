const main = document.querySelector('.main');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const output = document.createElement('div');
main.append(output);
main.append(btn1);
main.append(btn2);
btn1.textContent = 'Start';
btn2.textContent = 'End';
let val = 0;
let intval;

btn1.onclick = ()=>{
    if(!intval){
    intval = setInterval(counter,1000,1);
    }
}

btn2.onclick = ()=>{
clearInterval(intval);
intval = null;
}



function counter(a){
    val = val + a;
    output.textContent = val;
}