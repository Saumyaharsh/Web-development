const btn = document.getElementById('addtodobtn');
const inputvalue = document.getElementById('todoinput');
const ul = document.getElementById('todolist');
console.log(ul)
btn.addEventListener('click',()=>{
   // const iteminput = inputvalue.value ;
    
   if(inputvalue.value != '' ){
    const li = document.createElement('li');
    li.textContent = inputvalue.value 

    li.addEventListener('click',function(){
        this.parentNode.removeChild(this);
    })
    ul.append(li);
    inputvalue.value = '';
}
})