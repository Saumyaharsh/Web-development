const obj1 = new Object();
obj1.first = 'Laurence'
obj1['last'] = 'Svekis'
obj1.fullname = function(){
    return(`${this.first} ${this.last}`)
}

const obj2 = {
first:'Laurence',
last:'Svekis',
fullName: function(){
    return `${this.first} ${this.last}`
},
full: ()=>{
    return `${obj2.first} Working`
}



};

console.log(obj1.fullname());
console.log(obj2.fullName());
console.log(obj2.full());
