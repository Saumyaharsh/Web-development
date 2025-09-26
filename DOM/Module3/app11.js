const main = document.querySelector('.game');
const vals = ['💔','😍'];
const numplayers = 9;
const numsa = numplayers > 3? 3: numplayers;
const game = {players : [],
    total:0,
}
const scorediv = maker('div',main,'score','Score');
const gamearea = maker('div',main,'gamearea','');
gamearea.style.setProperty(`grid-template-columns`,`repeat(${numsa},1fr)`);
const coins = [];
const btns = [];
const dashboard = maker('div',main,'dash','');
makerplayers();
const btn  = maker('button',dashboard,'btn','Flip Coin');
function makerplayers(){
    for(let i = 0; i<numplayers; i++){
        const player = maker('div',gamearea,'gamer',`Coin ${i+1}`);
        const coin = maker('div',player,'coin','💔');
        coin.val = 1;
        coins.push(coin);
        const btn1 = maker('button',player,'btn',`Heads ${vals[1]}`);
        btn1.val = 1;
        btn1.style.backgroundColor = 'white';
        btn1.style.color = 'black';
        btn1.onclick = flipselection;
        btns.push(btn1);
        game.players.push(0);

    }
}
btn.onclick = (e)=>{
    btn.disabled = true;
    coins.forEach((ele)=>{
        ele.style.backgroundColor = 'black';
        ele.textContent = ' ';
    })
    setTimeout(flipper,500);
}
 function flipselection(e){
    const ele = e.target;
    console.log(ele.val);
    if(ele.val == 1){
        ele.innerHTML = `Tails ${vals[0]}`;
        ele.style.backgroundColor = 'black';
        ele.style.color = 'white';
        ele.val = 0;
    }else{
        ele.innerHTML = `Heads ${vals[1]}`;
        ele.style.backgroundColor = 'white';
        ele.style.color = 'black';
        ele.val = 1;
    }
 }
 function maker(t,p,c,h){
    const el = document.createElement(t);
    el.classList.add(c);
    el.innerHTML = h;
    return p.appendChild(el);
 }
 function flipper(){
    game.total++;
    coins.forEach((ele,ind)=>{
        const boo = Math.floor(Math.random() + 0.5);
        ele.innerHTML = vals[boo];
        console.log(btns[ind].val);
        console.log(ele.val);
        ele.val = boo;
        ele.style.backgroundColor = 'gold';
        btn.disabled = false;
        checker(ele.val,btns[ind].val,ind);
    })
    let html = `Total ${game.total} <br> |`;
    game.players.forEach((pla,i)=>{
        html += `P${i+1} (${game.players[i]}) |`;
    })
    scorediv.innerHTML = html;
 }

 function checker(coinval,btnval,ind){
    if(btnval==coinval){
        console.log(`${ind} was correct`);
        game.players[ind]++;
    }else{
        console.log(`${ind} was wrong`);
    }
 }