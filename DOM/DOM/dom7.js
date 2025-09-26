const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
myinput.setAttribute('type','number');
myinput.setAttribute('max',20);
myinput.setAttribute('min',0);
// little unexpected code above
myinput.value = 5;

btn.onclick = btnclicked;
function btnclicked(){
let num = myinput.value;
let html = '';
for(let i = 0; i<num; i++){
    console.log(i);
    html += `<div>${i+1} Loop</div>`
}
let i = 10;
while(i<num){
    i++;
    html += `<div> ${i} While</div>`;
}

do{
    i++;
    html += `<div> ${i} Do-While</div>`;


}while(i<num)
output.innerHTML = html;
    console.log('ready')
}