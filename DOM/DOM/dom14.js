// ALERT SOMETHING WRONG IN OUTPUT

const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
btn.onclick = btnclicked;
const arr = ['Svekis','Laurence','100',50,10];


function btnclicked(){
const val = myinput.value;
const res = arr.includes(val);
const message = (res)?'was found':'Not found';
let html = `<h2>Search results for ${val}</h2>`;
html += `<div>${val} - ${message}</div>`;
html += `<div>Includes ${res}</div>`;
const indexpos = arr.indexOf(val);
html += `<div>IndexOf ${indexpos}</div>`;
const indexposlast = arr.lastIndexOf(val);
html += `<div>IndexLast ${indexposlast}</div>`;
const finderval = arr.find((v)=>{
    return typeof(val) == 'number';
});
html += `<div>Find 1 ${finderval }</div>`;
const findervalp = arr.find((v)=>{
    return v==val;
});
html += `<div>Find 2 ${findervalp}</div>`;
const findervalnum = arr.find((v)=>{
    return v>10;
});
html += `<div>Find 3 ${findervalnum}</div>`;
output.innerHTML = html;
console.log(res);
console.log(indexpos);
console.log(indexposlast);
console.log(finderval);
console.log(findervalp);
console.log(findervalnum);
}