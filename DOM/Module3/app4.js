const main = document.querySelector('div');
console.log(main);
main.customValues = 1000;
const myinput = makeelement(document.body,'input');
const btn = makeelement(document.body,'button');
myinput.value = 5;
btn.textContent = 'Make Clickers';
const holder = [];
const main2 = makeelement(document.body,'div');
const btnreport = makeelement(main2,'button');
btnreport.textContent = 'Generate Report';
btnreport.onclick = ()=>{
    console.log(holder);
    const report = makeelement(main2,'div');
    main2.prepend(report);
    report.textContent = 'New Report';
        let html = 'New Report';
    holder.forEach((ele,ind)=>{
        html += `<div>${ind+1}. = ${ele.trackingval}</div>`
    })
    html += '<hr></hr>'
    report.innerHTML = html;
}


btn.onclick = ()=>{
for(let i = 0; i<myinput.value; i++){
maker(main);
}
}


function maker (parent){
 const div = makeelement(parent,'div');
 holder.push(div);
 div.trackingval = 0;
 const infield = makeelement(div,'input');
 inputtonum(infield);
 const btn1 = makeelement(div,'button');
 const btn2 = makeelement(div,'button');
 const div1 = makeelement(div,'div')
const btn3 = makeelement(div,'button');
 btn3.textContent = 'Update';


 div1.style.fontsize = '2em';
 div1.style.display = 'inline-block';
 btn1.textContent = '-';
 btn2.textContent = '+';
 btn1.style.backgroundColor = 'red';
 btn2.style.backgroundColor = 'green';
btn1.style.color = 'white';
btn2.style.color = 'white';

updater(infield,div1,div.trackingval);
btn1.onclick = ()=>{
    div.trackingval--;
    if(div.trackingval <= 0) div.trackingval = 0;
    updater(infield,div1,div.trackingval);
}
btn2.onclick = ()=>{
    div.trackingval++;
    updater(infield,div1,div.trackingval);
}
btn3.onclick = ()=>{
    div.trackingval = infield.value;
      div.trackingval--;
    if(div.trackingval <= 0) div.trackingval = 0;
    updater(infield,div1,div.trackingval);

}

}
function updater(inputele,textele,num){
inputele.value = num ;
textele.innerHTML = `${num}`;
}
function inputtonum(ele){
ele.setAttribute('type','number');
ele.setAttribute('min',0);
ele.setAttribute('max',100000);
ele.value = 0;


}
function makeelement(parent,eletype){
const ele = document.createElement(eletype);
return parent.appendChild(ele);
}


// main.onclick = (e)=>{
//     main.customValues++;
//     main.textContent = `Clicks ${main.customValues}`
// }