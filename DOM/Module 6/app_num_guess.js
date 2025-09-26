const btn = document.getElementById('guessbutton');
const guess = document.getElementById('userguess');
const para = document.querySelector('#main>p');
const output = document.getElementById('result')
let answer = 0;
const main = document.getElementById('main')
const btn2 = document.createElement('button');
main.prepend(btn2);
btn.textContent = 'Start Game';
btn2.addEventListener('click',startgame)
btn.style.display = 'none';
guess.style.display = 'none';
para.textContent = 'Hit the Start button to start the game';
startgame();
function startgame(){
btn.style.display = 'block';
btn2.style.display = 'none';
guess.style.display = 'block';
para.textContent = `Guess a number 1-10`;
 answer = Math.floor(Math.random()*10) + 1;
 output.textContent = '';
console.log(answer)
}
function endgame(){
btn.style.display = 'none';
btn2.style.display = 'block';
guess.style.display = 'none';
para.textContent = `Hit the start button to start`;
}



btn.addEventListener('click',()=>{
    const userguess = parseInt(guess.value);
    guess.value = '';
    const result = userguess > answer ?'Higher':'Lower';
    if(userguess === answer){
        output.textContent = 'Congrats you are correct';
        endgame();
    }else{
        output.textContent = `Guess Again ${result}`;
    }
})