const tabs = document.querySelectorAll('.tab-link')
const alltabs = document.querySelectorAll('.tab-content');
console.log(tabs)
tabs.forEach((tab)=>{
tab.addEventListener('click',function(){
    alltabs.forEach(ele=>{
        ele.style.display = 'none';
    })
    const myele = this.getAttribute('data-target');
    const activetab = document.getElementById(myele);
    activetab.style.display = 'block';
})

})