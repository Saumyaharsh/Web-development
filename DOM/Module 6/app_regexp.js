const output = document.querySelector('.output');
const myinput = document.querySelector('input');
const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
const lenval = myinput.value.length;
countervowels(myinput.value);



})
const str1 = 'Laurence Svekis';
const str2 = 'hello world';
console.log(output);

function countervowels(val){
    const total = val.length;
    const m = val.match(/[aeiou]/gi);
    console.log(m.length);
    const listvowels = m.join('-');
    output.innerHTML = `<div><b>${val}</b></div>`
    output.innerHTML += `<div>Total Length ${total}</div>`;
    output.innerHTML += `<div>Vowel Length ${m.length}</div>`;
    output.innerHTML += `<div>Vowel Length ${listvowels}</div>`;



}