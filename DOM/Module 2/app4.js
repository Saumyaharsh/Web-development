window.onload = init; // When script tag is in head tag
//document.body.onload = init1; - when script tag at last

document.addEventListener('DOMContentLoaded',init3); // another method  , going to fire off before window
function init3(){
const div = document.querySelector('div');
div.style.backgroundColor = '#ddd';
const h1 = document.createElement('h1');
h1.textContent = 'Saumya Harsh';
div.append(h1);
div.addEventListener('click',click1,{once:true});
h1.addEventListener('click',click2)
h1.addEventListener('click',click3)


}

function click1(e){
console.log('DIV');

}
function click2(e){
console.log('H1');
    e.target.removeEventListener('click',click2);

}
function click3(e){
console.log('click3');
    
}








function init1(){
    console.log('doc');
const div = document.querySelector('div');
const h1 = document.createElement('h1');
h1.textContent = 'Saumya Harsh';
h1.onclick = ()=>{
    console.log('h1 #2');
}
h1.addEventListener('click',(e)=>{
    console.log('h1 clicked')
    
})
h1.onclick = ()=>{
    console.log('h1 #3');
}
h1.addEventListener('click',(e)=>{
    console.log('h1 #4')
    
})
h1.addEventListener('click',(e)=>{
    console.log('h1 #5')
    
})

div.append(h1);
console.log(div);

}
function init(){
console.log('window');

}
