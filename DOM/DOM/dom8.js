/** ALERT CODE NOT WORKING PROPERLY */

const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
btn.onclick = btnclick;
myinput.value = 'Laurence';
const myobj = {
    first:'Laurence',
    last:'Svekis',
    ele:output,
    id:0,
    fullname: function(val){
        return `${this.first} ${this.last} ${this.id} ${val}`
    },
    zname(val){
        return `${this.first} ${this.last} ${this.id} ${val}`

    },
    adder(first,last){
        this.first = first;
        this.last = last;
        this.id = Math.floor(Math.random()*100);
        return `${this.first} ${this.last} ${this.id}`;

        }
};
function btnclick(){
    const newfirst = 'Luarence';
    const rannum = Math.floor(Math.random()*100);
    const newlast = `Svekis${rannum}`;
    console.log(myobj.adder(newfirst,newlast));
    output.innerHTML = `<div>${myobj.fullname('test')}</div>`;
    console.log(myobj.zname('test'))
    console.clear();
    const arr1 = Object.entries(myobj)
    console.log(arr1)
    const arr2 = Object.keys(myobj)
    console.log(arr2)
    const arr3 = Object.values(myobj)
    console.log(arr3)
    const key = myinput.value;
    console.log(myobj[key] !== undefined)
    console.log(key in myobj);
    for(const prop in myobj){
        const val = myobj[prop];
        console.log(typeof(val))
        if(typeof(val) == 'string' || typeof(val) == 'Number' ){
            console.log(`${prop} : ${myobj[prop]}`)
        }
        else{
            console.log(`Other type ${typeof(val)}`);
        }
    }
    console.log(typeof(arr1))
}