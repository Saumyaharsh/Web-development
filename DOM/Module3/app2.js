const output = document.querySelector('div');
console.log(output);
output.innerHTML = '';
const holder = {
    ele:null,
}
for(let i = 0; i<20; i++){
const ele = document.createElement('span');
output.append(ele);
ele.textContent = `${i+1} - Cell`;
ele.style.border = '1px solid #ddd';
ele.style.padding = '10px';
ele.style.display = 'inline-block';
ele.addEventListener('click',mover);
}

function mover(e){
const ele = e.target;
if(holder.ele){
const parent = ele.parentNode;
parent.insertBefore(holder.ele,ele); // insertbefore holder.ele ko ele ke before
holder.ele.style.color = 'black';
holder.ele.style.borderColor = '#ddd';
//ele.style.border = '3px solid black'; // mera mann
holder.ele = null;
}else{
const withactive = document.querySelector('.active');
if(withactive){
    withactive.classList.remove('active');
}
holder.ele = ele;

holder.ele.classList.add('active');
holder.ele.style.color = 'red';
holder.ele.style.borderColor = 'red';
}

}