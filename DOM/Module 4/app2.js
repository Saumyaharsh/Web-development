const main = document.querySelector('.main')
const timer = document.createElement('div');
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')

const game = {
    timer:0,
    start:null,
    end:null,
}
main.append(timer);
main.append(btn1)
main.append(btn2);
btn1.style.backgroundColor = 'green';
btn2.style.backgroundColor = 'red';
btn1.style.color = 'white';
btn2.style.color = 'white';


btn1.textContent = 'Start';
btn2.textContent = 'Stop';
btn2.disabled = true;
btn1.addEventListener('click',starttimer);
btn2.addEventListener('click',endtimer);

function starttimer(){
    console.log('start')
    showtimer()
    btn1.disabled = true;
    btn2.disabled = false;
    const date = new Date();
    game.start = date.getTime();
}
function endtimer(){
console.log(end);
clearInterval(game.timer)
btn2.disabled = true;
btn1.disabled = false;
const date = new Date();
game.end= date.getTime();
const totaltime = ((game.start-game.end)/1000);
console.log(totaltime)
}

function showtimer(){
    let mins,secs,millis;
    game.timer = setInterval(()=>{
        const diff = new Date().getTime()- game.start;
        mins  = parseInt(diff/1000/60);
       mins =  mins<10?'0'+mins:mins;
        secs  = parseInt(diff/1000);
        secs = secs<10?'0'+secs:secs;
        if(secs > 60) secs %= 60;
        
        millis = diff;
        if(millis > 1000) millis %= 1000;
        timer.textContent = `${mins} : ${secs} : ${millis}`
        //console.log(`${mins} : ${secs} : ${millis}`)
    },10)
}



const start = new Date('July 1, 2000');
const end = new Date ('August 1, 2000');
console.log(end.getTime());
console.log(start.getTime());

const diff = end.getTime() - start.getTime();
console.log(diff);

const seconds = parseInt(diff/1000);
const minutes = parseInt(diff/1000/60);
const hours = parseInt(diff/1000/60/60);
const days = parseInt(diff/1000/60/60/24);
console.log(days,hours,minutes,seconds);

console.log(minutes,seconds);
console.clear()