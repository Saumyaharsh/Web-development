const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
const arr = ['one','two', 'three','four','five'];
const temp1 = [];
myinput.value = 10;
myinput.setAttribute('type','number');

for(let i=0; i<10; i++){
    const ranvalue = Math.floor(Math.random()*100);
    temp1.push(ranvalue);
}
btn.onclick = btnclicked;

function btnclicked(){

    // making copy
    const arr1 = arr.map((item,index,array)=>{
        console.log(item);
        return `${item} ${index} `;
    })
    const arr2 = temp1.map((val)=>val*2);
    const arr3 = temp1.filter((val)=> val>50)
    const arr4 = temp1.reduce((previous,current,index,array)=>{
    console.log(previous);
    console.log(current);
    return previous + current;
    })
    const arr5= temp1.every((val)=>{
        console.log(val)
        return val<150;
    }) 
    
    const arr6 = temp1.some((val)=>{
        console.log(val);
        return val<50;
    })
    // boolean on the condition all have to be true
    console.log(arr1);
    console.log(arr2)
    console.log(arr3)
    console.log(arr4)
    console.log(arr5)
    console.log(arr6)
      const arr7 = temp1.map((val)=>{
        console.log(val);
        return val * myinput.value;
    })
    let html =''
    arr7.forEach((ele,ind)=>{
        html += `<div>${arr[ind]} X ${myinput.value} = ${ele}</div>`
    })
    output.innerHTML = html
}