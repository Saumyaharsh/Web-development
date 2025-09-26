const output = document.querySelector('div');
console.log(output);
output.innerhtml = '';
const tabvalue = {rows:5,cols:6};

 const main = addTable(output,tabvalue.rows,tabvalue.cols);
const btn1 = btnmaker(output,'random','blue','white');
const btn2 = btnmaker(output,'MoveDown','red','white');
const btn3 = btnmaker(output,'MoveLeft','red','white');
btn3.addEventListener('click',(e)=>{
    const tds = main.querySelectorAll('td');
    for(let i = 0; i<tds.length-1; i++){
        console.log(tds.length,i);
        const bgcolor = (i+1==tds.length)?rancolor():tds[i+1].style.backgroundColor;
        console.log(bgcolor);
        tds[i].style.backgroundColor = tds[i+1].style.backgroundColor;
    }
})


btn1.addEventListener('click',(e)=>{
  const tds =   main.querySelectorAll('td');
  console.log(tds);
  tds.forEach((ele)=>{
        console.log(ele);
        ele.style.backgroundColor = rancolor();
    })
})
btn2.addEventListener('click',(e)=>{
  const tds =   main.querySelectorAll('td');
  let holder = [];
tds.forEach((ele,ind)=>{
    let temp = ind- tabvalue.cols;
    console.log(temp);
    let tempcolor = '';

if(temp>=0){
const el = tds[temp];
tempcolor = el.style.backgroundColor;
holder.push(tempcolor);
console.log(el.textContent);
console.log(ele.textContent);
ele.style.backgroundColor = el.style.backgroundColor;
}
else{
    tempcolor = rancolor();
    holder.push(temp);
}
})
console.log(holder);
holder.forEach((val,ind)=>{
    tds[ind].style.backgroundColor = val;
})
})
function rancolor(){
    return `#${Math.random().toString(16).slice(2,8)}`;
    
}



function btnmaker(parent,html,clr,fntcolor){
const btn = document.createElement('button');
btn.innerHTML = html;
btn.style.backgroundColor = clr;
btn.style.color = fntcolor;
return parent.appendChild(btn);

}
function addTable(parent,rows,cols){
const tbl = document.createElement('table');
tbl.style.border = '1px solid black';
const tblby = document.createElement('tbody');
let counter = 0;
let wid = (100/cols)*100;
tbl.append(tblby);
for(let y=0; y<rows; y++){
const tr = document.createElement('tr');
for(let x = 0; x<cols; x++){
    const td = document.createElement('td');
    counter++;
    td.textContent = `${counter}`;
    td.style.width = `${wid}px`;
    td.style.border = '1px solid #ddd';
    td.style.textAlign = 'center';
    tr.append(td);
    td.addEventListener('click',()=>{
        document.body.style.backgroundColor = td.style.backgroundColor;
    })
}
tblby.append(tr);
}
return parent.appendChild(tbl);                                                                                                                            
}