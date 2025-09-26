const output = document.querySelector('div');
output.innerHTML = ''
const data = [{
    title:'My modal 1',
    body: 'THis is modal content 1',
    color: '#ddd',
    font: 'black',
},{
    title:'My modal 2',
    body: 'THis is modal content 2',
    color: 'yellow',
    font: 'black',
},
{
    title:'My modal 3',
    body: 'THis is modal content 3',
    color: 'purple',
    font: 'white',
}];
data.forEach((mod,ind)=>{
    const btn = document.createElement('button');
    btn.textContent = `Open Modal ${ind+1}`;
    output.append(btn);
const modal = genModal(`Modal #${ind+1}`,mod);
output.append(modal);
modal.addEventListener('click',(e)=>{
    if(e.target === modal){
        closer(modal);
    }
});

btn.addEventListener('click',(e)=>{
    const temp = modal.style.display;
    if(temp==='block'){
        modal.style.display = 'none'
    }else{
        modal.style.display = 'block';
    }

})
})


function closer(ele){
    console.log(ele);
    ele.style.display = 'none';
}
function genModal(id,mdata){
    const overlay = document.createElement('div');
    const main = document.createElement('div');
    const mtitile = document.createElement('div');
    const mbody = document.createElement('div');
    const closex = document.createElement('span');
    const innertitle = document.createElement('div');
    closex.classList.add('close');
    closex.onclick = ()=>{
        closer(overlay);
    }
    closex.innerHTML = '&times;';
    mtitile.style.fontSize = '1.5rem';
    mbody.style.border = '1px solid #111';
    mbody.style.padding = '10px';

    mtitile.append(closex);
    mtitile.style.backgroundColor = 'black';
    mtitile.style.color = 'white';
    mtitile.style.padding = '4px';
    innertitle.textContent = mdata.title;
    mtitile.append(innertitle)

    overlay.classList.add('overlay');
    main.classList.add('main');
    main.append(mtitile);
    main.append(mbody);
    overlay.append(main);
    main.style.color = mdata.font;
    main.style.backgroundColor = mdata.color;
    mbody.textContent = mdata.body
    console.log(main);
    return overlay;
}
