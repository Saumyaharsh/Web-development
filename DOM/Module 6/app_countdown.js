const btn = document.querySelector('button');
const output = document.querySelector('.output');
output.style.color = 'black'
btn.addEventListener('click',()=>{
    let counter = 10;
    output.innerText = counter;
    output.style.color = 'red'
    const countdown = setInterval(()=>{
        counter--;
        output.innerText = counter;

        if(counter<0){
            output.innerText = 'Blast Off';
            clearInterval(countdown)
            output.style.color = 'black'

        }
    },1000)
})