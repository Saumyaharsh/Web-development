const main = document.querySelector('div');
const btn = document.createElement('button');
const myinput = document.createElement('input');
myinput.value = 40;
myinput.style.display = 'block';
btn.textContent = 'Add Words';
main.append(myinput);
main.append(btn);
console.log(main);
const output = document.createElement('div');
main.append(output);
main.onclick = ()=>{
    makewords(output,myinput.value);
}
const vowels = 'aeiou';
const letters = 'abcdefghijssstmmmmmmmmkdfjdjkfjdkfjdsfjs;lcnmmvbnmvcvopierutuyterwperomenbrbwewemnrzxixoicxvjkrthr';
function makewords(parent,num){

let temp = '';
for(let x = 0; x<num; x++){
 const wordlen = Math.floor(Math.random()*7)+2;
console.log(wordlen);
let tempword = '';
for(let i = 0; i<wordlen; i++){
    const ranvowpos = Math.floor(Math.random()*4)+1;
    console.log(i%ranvowpos);
    let str = (i%ranvowpos)==0?vowels:letters;

    const val = Math.floor(Math.random()*str.length);
    tempword += letters.substring(val,val+1);
}
if(x===0){
   tempword = tempword[0].toUpperCase() + tempword.slice(1);

}
if(Math.random()>.8){
    temp = temp.trim();
    const capword = tempword[0].toUpperCase() + tempword.slice(1);
    temp += `.${capword}`
}else{
temp += tempword + ' ';

}

}
const containerele = document.createElement('div');
containerele.textContent =` ${temp.trim()}.`;
containerele.style.padding = '10px';
containerele.style.border = '1px solid #ddd';
output.prepend(containerele);
console.log(temp);


}