const main = document.querySelector('.main');
const words = ['Javascript','cat','dog','people','code','rat','monkey','duck','horse'];
const game = {
inplay:false,
cur:0,
timer:null,
num:20,
arr1:[],
};

const output = createeles('div',main,'New Text Press Start','output');
const txtarea = createeles('textarea',main,'','txtarea');
txtarea.style.display = 'none';
const btn = createeles('button',main,'start','btn');

btn.onclick = startgame;
txtarea.addEventListener('keydown',keychecker);
function keychecker(){

}
function buildarray(){
    let lastindex;
    game.arr1.length = 0;
while(game.arr1.length<game.num){
    const ranindex = Math.floor(Math.random()*words.length);
    if(lastindex != ranindex){
        game.arr1.push(words[ranindex]);
        lastindex = ranindex;
    }
}
console.log(game.arr1);
}


function startgame(){
    txtarea.style.display = 'block';
            buildarray()
    let counter = 5;
    btn.style.display = 'none';
    txtarea.focus();
    game.timer = setInterval(()=>{
        output.textContent = `Get Ready ${counter}`;
        counter--;
        if(counter<=0){
            clearInterval(game.timer);
            gameplay()
        }
    },1000);
}
function gameplay(){
txtarea.focus();

}


function showwords(){
 const w = game.arr1[game.cur];
 const n = game.arr1[game.cur + 1];
 output.innerHTML = ``;
 const curword = createeles('span',output,w,'curw');
 const nextword = createeles('span',output,n,'nextw');
 console.log(w,n);

}


function createeles(t,p,html,cla){
const ele = document.createElement(t);
ele.innerHTML = html;
ele.classList.add(cla);
return p.appendChild(ele);
}