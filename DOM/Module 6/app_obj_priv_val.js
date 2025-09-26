const Person = function(){
    let id = 1000;
    //console.log('Function Run');
    this.getId = function(){
        return id;
    }
    this.makeId = function(){
        id = Math.floor(Math.random()*1000);
        return id;
    }
    this.setId = function(newId){
        id = newId;
        return id;
    }
}
//  person () - will return undefined
//  never get invoked
//  Values and variables are private 
//  For instances we can see the methods we can run but not the id



const peop1 = new Person();
const holder = [];
for(let i = 0;i<10;i++){
    holder.push(new Person())
    console.log(holder[i].getId());
}
peop1.makeId();
peop1.setId(55)
console.log(peop1.getId())
