const ele1 = document.querySelector('div') // selects first div
const eles = document.querySelectorAll('div') // selects all div
const ele2 = document.querySelector('#one')
const ele3 = document.querySelector('.red')
console.dir(ele2)
console.dir(ele1)
console.dir(eles)
console.log(ele3)
eles[0].textContent = 'Hello World'
console.log(ele1.textContent)

const myInput = document.querySelector('input')
console.log(myInput.value)
myInput.value = 'Laurence'
eles[1].textContent = 'Click Me'
eles[1].style.border = '1px solid black'
eles[1].style.width = '200px';
eles[1].style.textAlign = 'center';
eles[1].onclick = clicker;

function clicker(){
    let temp = myInput.value;
    ele2.textContent = temp;
    myInput.value = '';
}