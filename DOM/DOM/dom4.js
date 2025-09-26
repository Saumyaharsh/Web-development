const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
let a=val=b = 100
//let val = 10 =a 
let c = a+b+100;
c = a*b/100;
let d =  501%3;
a++;
a--;
console.log(a)
console.log(d)
console.log(c)
let e = 10;
e*=a;
console.log(e)
console.clear();
console.log('5' == 5)
console.log('5' === 5);
console.log('5' != 6)
console.log('5' !== 5)
console.log(10<10)
console.log(('5'==5) && true)
console.log((1==1) || false);

btn.onclick = ()=>{
    let val = Number(myinput.value);
    console.log(typeof(val));
    console.log(isNaN(val))
    let html = `<div>Results ${val}</div>`;
    if(!isNaN(val)){
        html += 'Was a number';
    }
    else{
       html  += 'Not a number'
    }
    html += `<div>${val*50} = ${val}X50</div>`
    output.innerHTML = html;
}