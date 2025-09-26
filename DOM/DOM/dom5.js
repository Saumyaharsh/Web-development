// ALERT 
// CODE NOT RUNNING
// CHECK IT


const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
btn.onclick = clickedme;
let val = (true) ? 'true':false;
val = (isNaN('test'))?'true':'false';

output.textContent = 'How old are you?';
btn.textContent ='Entry checker'
console.log(val)
function clickedme(){
    const myage = myinput.value;
    if(!isNaN(myage)){
        console.log('ready')
        output.style.backgroundColor = 'White';
        output.style.color = 'black'
        output.textContent = 'Please enter your age?'
        const message = myage>19 ?`${myage} is allowed to enter`:`${myage} is not old enough`;
    output.textContent += message
    
    }else{
        myinput.value = '';
        output.style.backgroundColor = 'red'
        output.style.color = 'white';
        output.textContent = 'Please enter a number for your age'
    }

}