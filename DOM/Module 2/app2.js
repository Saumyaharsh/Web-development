const div1 = document.querySelector('div')
const div5 = document.querySelector('#three')
const div6 = document.querySelector('div .one');
const ul1 = document.createElement('ul');
const myinput = maker('input',div1,'')
myinput.setAttribute('type','text')
myinput.value = 'Laurence Svekis';
const btn = maker('button',div1,'Add to List');
btn.onclick = ()=>{
  
     const lis = document.querySelectorAll('li');
    let temp = `${myinput.value} ${lis.length+1}`;
    addlistitem(temp,'red');
}

div6.style.color = 'purple';
div6.textContent = 'Hello World 2';
// Removing element from html
console.log(div6.parentNode);
div6.parentNode.removeChild(div6);
// Even after removing element it is still present in document we can later use it if we want;
console.log(div1);

div1.append(ul1)
console.log(ul1);

for(let i = 0; i<10; i++){
    addlistitem(`List item ${i+1}`,'blue')
}
function addlistitem(val,col){
    const li = document.createElement('li');
    li.innerText= val;
    li.style.color = col;
    li.onclick = (e)=>{
        li.parentNode.removeChild(li);
    }
    return ul1.appendChild(li);
}

const div2 = document.createElement('div');
div1.append(div2);
div1.prepend(div2);
div2.innerHTML = `Hello World`;

const div3 = maker('div',div1,'Laurence Svekis');

function maker(eleT, parent, html){
    const ele = document.createElement(eleT);
    ele.innerHTML = html;
    return parent.appendChild(ele);
  
}
div3.style.backgroundColor = 'red';
div5.append(div3)
div5.prepend(ul1);
// We cannot have two elements at two places so when we are prepending ul1 , it gets removed from its previous position
div5.append(div6);


