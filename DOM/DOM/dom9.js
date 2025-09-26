const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
btn.onclick = btnclicked;
myinput.value = 'Laurence';
function fullname(first='Laurence',last='Svekis'){
    this.firstname = first,
    this.lastname = last,
    this.full = `${first} ${last}`
}
function btnclicked(){
    const person = new fullname(myinput.value,'Smith');
    console.log(person.full)
}