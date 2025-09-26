const myform = document.getElementById('emailform');
myform.addEventListener('submit',(e)=>{
 e.preventDefault(); // No default action // Prevent default action of form
 const email = document.getElementById('emailinput');
 const val = email.value ;
 let meassage = '';
 if(val.includes('@')){
    meassage = 'Emai is valid';
 }else{
    meassage = 'Please Enter a valid Email'
 }
 document.getElementById('message').innerHTML = meassage
})