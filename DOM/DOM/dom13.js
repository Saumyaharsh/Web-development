const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
btn.onclick = onclicked;
myinput.value =  10;
myinput.setAttribute('type', 'number');
const arr = ['one','two','three','four','five'];
let boo = true;
for(let i=0;i<10;i++){
    const ranvalue = Math.floor(Math.random()*100);
    arr.push(ranvalue);
}
console.log(arr);
function onclicked(){
const arr1 = arr.filter((ele)=>{
    return typeof(ele) =='string';
})
const ind = Math.floor(Math.random()*arr.length);
output.innerHTML = `Random array item with index of ${ind} value ${arr[ind]}`;
let html = '';
if(boo){
    arr.sort();
    boo = false;
}
else{
    arr.reverse();
}
html+= `<div>${arr.toString()}</div>`;
for(let i = 0; i<10; i++){
    arr.sort(()=>{
        return Math.random() - 0.5;
    })
}
html += `<div>${arr.toString()}</div>`
arr.forEach((ele,ind)=>{
    html += `<div>${ind}-${ele}</div>`;
})
output.innerHTML += html;
console.log(arr1);
}