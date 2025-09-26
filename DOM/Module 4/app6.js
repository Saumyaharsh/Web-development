const str1 = 'Laurence Svekis';
const myobj = {
    first:'Laurence',
    last:'Svekis',
    id:100,
};

const input1 = document.querySelector('input');
const btn = document.querySelector('button');
const output = document.querySelector('.output');


document.addEventListener('DOMContentLoaded',init);
btn.addEventListener('click',btnclicker);
function btnclicker(){
    const val = input1.value;
    if(val.length>0){
        
        let user = JSON.parse(localStorage.getItem('user'));
        user.first = val;
        console.log(user);
        output.textContent = `${user.first} ${user.last}`;

        localStorage.setItem('user',JSON.stringify(user));
    }
}
function init(){
    console.log('Ready');
    output.innerHTML = ''
    // let val = localStorage.getItem('user');
    // let user = JSON.parse(val);
    // change 1
try{
         let user = JSON.parse(localStorage.getItem('user'));
        output.textContent = `${user.first} ${user.last}`;
}
catch(e){
       let storeobj = JSON.stringify(myobj);

        localStorage.setItem('user',storeobj);
}





    // if(!user.first){
    //     let storeobj = JSON.stringify(myobj);

    //     localStorage.setItem('user',storeobj);
    // }else{
    //     let user = JSON.parse(localStorage.getItem('user'));
    //     output.textContent = `${user.first} ${user.last}`;
    // }
//    console.log(val);
}