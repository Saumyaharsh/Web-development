const main = document.querySelector('.main');
const ul = elemaker('ul','',main);
main.append(ul);
const url = 'https://jsonplaceholder.typicode.com/posts';
const btn = document.createElement('button');
btn.textContent = 'Get Data';
main.append(btn);
const btnnext = elemaker('button','Next',main);
const btnprev = elemaker('button','Previous',main);
let counter = 0;
updatebuttons();
btnprev.addEventListener('click',()=>{

if(counter>0)    counter -= 1;
getoutput();
})
btnnext.addEventListener('click',()=>{
    counter += 1;
    getoutput();
})

function getoutput(){
         fetch(url)
    .then(response=>response.json())
    .then(data=>{
        updatebuttons();
        const val = data[counter];
     const html = `${val.id} <h1>${val.title}</h1><div>${val.body}</div>`
     const holder = elemaker('div',html,main)
        // addtopage(data);
    })
}
btn.addEventListener('click',getdataval);
function getdataval(){
      fetch(url)
    .then(response=>response.json())
    .then(data=>{
        updatebuttons();

        addtopage(data);
    })
}

function updatebuttons(){
    if(counter<=0){
        btnprev.disabled = true;

    }else{
        btnprev.disabled = false;
    }
}

function addtopage(data){
    ul.innerHTML = '';
    console.log(data);
    data.forEach(item=>{
        const li = document.createElement('li');
        li.textContent = item.title;
      //const temp =   ul.appendChild(li); // appendchild use callback and return back the element;
      const temp = elemaker('li',item.title,ul);
   
    })

}
function elemaker(tagtype,txt,parent){
    const temp = document.createElement(tagtype);
    temp.innerHTML = txt;
    return parent.appendChild(temp);

}