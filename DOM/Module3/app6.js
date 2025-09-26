const main = document.querySelector('div');
const scrollind = document.createElement('div');
const scrbarp = document.createElement('div');
const scrbarc = document.createElement('div');
document.body.prepend(scrollind);
scrollind.textContent = 'Scroll bar';

scrollind.append(scrbarp);
scrbarp.append(scrbarc);
scrollind.style.textAlign = 'center';
scrollind.style.border = '1px solid black';
scrollind.style.padding = '0px';
scrollind.style.position = 'fixed';
scrollind.style.width = '100%';
scrollind.style.backgroundColor = 'black';
scrollind.style.color= 'white';
scrollind.style.top = '0';
scrollind.style.left = '0';
scrollind.style.zIndex = '1';

scrbarp.style.width = '100%';
scrbarp.style.height = '21px';
scrbarp.style.padding = '3px';
scrbarp.style.backgroundColor = 'white';

scrbarc.style.width = '0%';
scrbarc.style.height = '19px';

scrbarc.style.backgroundColor = 'green';

window.onscroll = (e)=>{
    const stop = document.body.scrollTop||document.documentElement.scrollTop;
    const pos = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolmeter = (stop/pos)*100;
    console.log(scrolmeter);
    const bgcolor =  scrolmeter>50 ?'red':'green';
    scrbarc.style.width = `${scrolmeter}%`;
    scrbarc.style.backgroundColor = bgcolor;

    
}


for(let i = 0; i<10; i++){
const div = document.createElement('div')
main.append(div);
div.style.border = '1px solid #ddd';
div.style.height = `${ranv(300)+150}px`;
div.innerHTML = `<h1>${i+1} Header</h1><div>Laurence Svekis</div>`;
div.style.backgroundColor = ranc();
div.style.color = 'white';







}
function ranc(){
    return `#${Math.random().toString(16).slice(2,8)}`;
}

function ranv(max){
    return Math.floor(Math.random()*max)+1;

}