const main = document.querySelector('.main');
const myinput = document.createElement('input')
const btn = document.createElement('button')
const output = document.createElement('div');

main.append(myinput);
main.append(btn)
main.append(output);

btn.textContent = 'Get Results';
myinput.setAttribute('type','date');

btn.addEventListener('click',()=>{
    const seldate = new Date(myinput.value);
    const curdate = new Date();
    const diff = curdate.getTime() - seldate.getTime();
    console.log(diff);
    const days = parseInt(diff/1000/60/60/24);
    const hours = parseInt(diff/1000/60/60);
    const minutes = parseInt(diff/1000/60);
    console.log(days);
    output.innerHTML = `<div>Days: ${days}</div><div>Hours : ${hours}</div>Minutes:${minutes}</div>`
})