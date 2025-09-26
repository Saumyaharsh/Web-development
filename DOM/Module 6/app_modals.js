document.addEventListener('DOMContentLoaded',function(){
    const modal = document.getElementById('mymodal');
    const openbtn = document.getElementById('openmodal');
    const closebtn = document.getElementsByClassName('close')[0];
    openbtn.onclick = function(){
        modal.style.display = 'block';
    }
    closebtn.onclick = function(){
        modal.style.display = 'none';
    }
    window.onclick = function(event){
        if(event.target === modal){
            modal.style.display = 'none'
        }
    }
})