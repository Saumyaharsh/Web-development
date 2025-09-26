const main = document.querySelector('.game');
const gamearea = maker(main,'div','gamearea','');
const btn = maker(main,'button','btn','Next Round');
const mes = maker(main,'div','mes','Click to Play');
const game = {
    players : 3,
    cards:[],
    view:[],
    s:[],
}
const carddata = {
suits:['spades','hearts','diams','clubs'],
val:['A','2','3','4','5','6','7','8','9','10','J','Q','K']
};
const deck = [];
//main.innerHTML = `&spades; &hearts; &diams; &clubs;`
builddeck();
addplayers();
btn.addEventListener('click',(e)=>{
    const temp = [];
    for(let i = 0; i<game.players; i++){
        game.s[i].lastChild.innerHTML = '';
        if(game.cards[i].length > 0){
            temp.push(i);
        }else{
            const ele = game.view[i];
            ele.innerHTML = 'X';
            game.s[i].firstChild.innerHTML = 'OUT';
            ele.style.backgroundColor = '#bbb';
        }
    }
    mes.innerHTML = 'Battle has begun...';
    gamer(temp,[]);
})
function gamer(inplay,holder){
    const vals = [];
    console.log(inplay);
    inplay.forEach((i)=>{
        if(game.cards[i].length > 0){
            const ele = game.view[i];
            const first = game.cards[i].shift();
            showcard(first,ele);
            vals.push(first.cardvalue);
            holder.push(first);
            game.s[i].lastChild.innerHTML += `${first.cardnum}${first.icon}`;
        }
    })
    const winners = [];
    const highvalue = Math.max(...vals);
    console.log(highvalue);
    vals.forEach((e,i)=>{
        if(e >= highvalue) winners.push(inplay[i]);
    })
    console.log(winners);
    if(winners.length > 1){
        mes.innerHTML += `Tie:`;
        winners.forEach((v)=>{
            mes.innerHTML += `p${v+1}`;
        })
        mes.innerHTML += '...';
        return gamer(winners,holder);
    }else if(winners.length == 0){
        mes.innerHTML += 'No Winner';
    }else{
        const temp = winners[0];
        game.cards[temp].push(...holder);
        mes.innerHTML += `Winner is Player ${temp+1}`;
    }
    updatescores();
}
function updatescores(){
    let tempplay = [];
    game.s.forEach((el,i)=>{
        const cardcount = game.cards[i].length;
        if(cardcount){
            el.firstChild.innerHTML = `${cardcount} left`;
            tempplay.push(i);
        }else{
            el.parentNode.style.opacity = 0.4;
        }
    })
    if(tempplay.length <=1 ){
        mes.innerHTML = `Game Over! Player ${tempplay[0] + 1} wins`;
        btn.disabled = true;
        btn.textContent = 'GAME OVER';
    }
}
function showcard(cc,ele){
    ele.innerHTML = `<div>${cc.cardnum}${cc.icon}</div>`;
    ele.style.color = cc.clr;
}
function addplayers(){
    let start = 0;
    let num = Math.floor(deck.length/game.players);
    let end = start + num;
    for(let i = 0; i<game.players; i++){
        const el = maker(gamearea,'div','player',``)
        const ele = maker(el,'div','info',`${i+1} Player`);
        const card = maker(el,'div','score',``);
        game.view.push(card);
        game.cards[i] = deck.slice(start,end);
        const score = maker(el,'div','score',``);
        const cardleft = maker(score,'div','box',`${game.cards[i].length} left`);
        const cardplayed = maker(score,'div','box','');
        game.s.push(score);
        start = end;
        end = end + num;
    }
    console.log(game.cards);
}
function builddeck(){
    carddata.suits.forEach((suit)=>{
        carddata.val.forEach((v,ind)=>{
            const bgc = (suit === 'hearts') || (suit=='diams') ?'red' :'black';
            const card = {
                suit:suit,
                icon: `&${suit};`,
                clr:bgc,
                cardnum:v,
                cardvalue:ind+1,
            }
            deck.push(card);
        })
    })
    deck.sort(()=>{
        return Math.random() - 0.5;
    })
}

function maker(par,eletype,cla,html){
    const ele = document.createElement(eletype);
    ele.classList.add(cla);
    ele.innerHTML = html;
    return par.appendChild(ele);
}