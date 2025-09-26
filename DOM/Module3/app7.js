
// ALERT CODE NOT RUNNING PROPERLY
const main = document.querySelector('div');
const div1 = document.createElement('div');
const btn = document.createElement('button');
const btn1 = document.createElement('button');
const div2 = document.createElement('div');

const questions = 3;
const ques = [];

const timervlaue = {curr:0,counter:0,running:false,int:{}};
main.innerHTML = '';

main.append(btn);
main.append(div1);
main.append(btn1);
main.append(div2);


div1.textContent = 0;
btn.textContent = 'timer';
btn1.textContent = 'Create Questions';

btn1.onclick = ()=>{
    btn1.style.display = 'none';
   createquestions();

}
function createquestions(){
 for(let i = 0; i<questions; i++){
    const first = rannum(1,10);
    const sec = rannum(1,10);
    const que = `${first} + ${sec}`;
    const ans = first + sec;
    console.log(que,ans);
    const myobj = {que:que,ans:ans};
    ques.push(myobj);
    }
    showquestion(0);
    starttimer();
}
function rannum(min,max){
    return Math.floor(Math.random()*(max - min + 1) + min);
}

btn.onclick = ()=>{
if(timervlaue.running){
  stoptimer()
}else{
  starttimer();
}
div1.textContent = timervlaue.running;
}

function updater(){
if(timervlaue.running){
timervlaue.counter++;
//console.log(timervlaue.counter);
div1.textContent = timervlaue.counter;
}
}
function movenextquestion(){
    timervlaue.curr++;
    if(timervlaue.curr>=ques.length){
        console.log('end');
        div2.innerHTML = '';
        ques.forEach((q)=>{
            div2.innerHTML += `<div>${q.que} = ${q.ans}</div>`;
        })
        stoptimer();
    }
    else{
        showquestion(timervlaue.curr);
    }
   

}
function showquestion(ind){
div2.innerHTML = '';
const ele = document.createElement('div');
const ele1 = document.createElement('div');
const inele = document.createElement('input');
const ele2 = document.createElement('div');
inele.setAttribute('type','number');
inele.style.width = '100px';
ele1.style.display = 'inline-block';

ele1.textContent = ques[ind].que + ' = ';
inele.addEventListener('keydown',(e)=>{
   if(e.code === 'Enter'){
    const val1 = inele.value;
    let mes  = 'wrong';
    inele.value = '';
    if(val1 === ques[ind].ans){
     mes = 'correct';
     setTimeout('movenextquestion',100);
    }
    ele2.textContent = `${mes} ${ques[ind].que} = ${val1}`
   };
})
ele.append(ele1);
ele.append(inele);
ele.append(ele2)
div2.append(ele);
inele.focus();

//starttimer();
}

function starttimer(){
    timervlaue.running = true;
    timervlaue.int = setInterval('updater()',1000);
    btn.textContent = 'Stop';
}

function stoptimer(){
    timervlaue.running = true;
    clearInterval(timervlaue.int);
    btn.textContent = 'Start';
}

btn.onclick = ()=>{
    if(timervlaue.running){
        stoptimer();
    }else{
        starttimer()
    }
}