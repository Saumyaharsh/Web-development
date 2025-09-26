const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
myinput.value = 'Laurence'
let counter = 0;
btn.onclick = ()=>{
    counter++
   let boo = (counter<3)
    if(counter<2){
        output.style.color = 'red';
    }
    else if(counter<4){
        output.style.color = 'green'
    }
    else if(counter<6){
        output.style.color = 'purple'
    }
    else{
         output.style.color = 'blue'
    }
    output.textContent = `Counter : ${counter} ${boo}`;
    console.log(counter)
    updater()
}
let val = 'Nothing Changed'
output.innerText = val;
function updater(){
switch(counter){
    case 0:
        val = ` Case 0 ${counter}`;
        break;
    case 3:
        val = `Case : ${counter}`
        break;
    default:
        val = `Default ${counter}`

}
output.innerText = val;
}