const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
let lowValue = 1;
let highvalue = 10;
let hiddenNumber = 0;
output.innerHTML = ''
starter()
function starter(){
     lowValue = getran(0,5);
     highvalue = getran(lowValue+1,50);
     hiddenNumber = getran(lowValue,highvalue);


output.innerHTML = `<div>Guess a number ${lowValue} and ${highvalue}</div>`
btn.onclick = clickedme;
myinput.setAttribute('type' , 'number')
myinput.setAttribute('min',lowValue)
myinput.setAttribute('max',highvalue);
btn.textContent = 'Enter Guess';
}


function clickedme(){
    output.textContent = '';
    const valinput = myinput.value;
    
    if(valinput==hiddenNumber){
        console.log('correct');
        output.innerHTML = `<div>Correct it was ${hiddenNumber}</div>`;

    }
    else{
      
       if(valinput < hiddenNumber){
        message = `${valinput} was wrong go higher`;
        lowValue = valinput
       }
       else{
        message = `${valinput} was wrong Go Lower!`;
        highvalue = valinput
       }
        output.innerHTML = `<div>${message}</div>`
        console.log(hiddenNumber);
        output.innerHTML += `<div>Guess Again between ${lowValue} and ${highvalue}</div>`;
    }
// let temp = Math.random()*10+1;
// temp = getran(1,5)
// console.log(temp);
// temp = Math.floor(temp);
//output.textContent = `${temp}, `;

}

function getran(min,max){
return Math.floor(Math.random() *(max-min+1) + min)
}
