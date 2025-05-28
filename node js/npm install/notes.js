const fs = require('fs')
const chalk = require('chalk')

/*

const getNotes = function(){
    return 'Your notes..'
}
const addnote = function(title,body){
    
const notes = loadnotes()
const duplicateNotes = notes.filter(function(note){
return note.title == title
})
if(duplicateNotes.length == 0){
    notes.push({
        title:title,
        body:body,
    })
    savedNotes(notes)
    console.log('New note added ')
}
else {
    console.log('Note title is taken ')
}

}
const removeNotes = function(title){
const notes = loadnotes()
const notestokeep = notes.filter(function(note){
    return note.title !== title
})
if(notes.length>notestokeep.length){
    console.log(chalk.green.inverse('Note removed!'))
    savedNotes(notestokeep)
}
else{
    console.log(chalk.red.inverse('No note found !'))
}


}
const savedNotes = function(notes){
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)

}
const loadnotes = function(){
    // If there is no json file then the code will not run . To make it run even if that file is not present
    // we use try catch statement
    try{
        const databuffer = fs.readFileSync('notes.json')
        const datajson = databuffer.toString()
        return JSON.parse(datajson) // converts json file in object
    }catch(e){
        return []
    }
    
}
module.exports = {
    getnotes : getNotes,
    addnote : addnote,
    removeNotes : removeNotes

}


*/


// REFACTOR ALL THE FUNCTIONS USING ES6 DEFINITION METHOD AND ARROW FUNCTIONS


const getNotes = ()=>{
    return 'Your notes..'
}
const addnote = function(title,body){
   // debugger
const notes = loadnotes()
/*
// Even if the the filter method gets one duplicate still it will iterate the whole array, we should use find method instead
const duplicateNotes = notes.filter((note)=>
 note.title == title
)

if(duplicateNotes.length == 0){
    notes.push({
        title:title,
        body:body,
    })
    savedNotes(notes)
    console.log('New note added ')
}
else {
    console.log('Note title is taken ')
}
*/
// Using find method
const duplicateNote = notes.find((note)=>note.title===title)
if(!duplicateNote){ // duplicateNote==undefined
    notes.push({
        title:title,
        body:body,
    })
    savedNotes(notes)
    console.log('New note added ')
}
else {
    console.log('Note title is taken ')
}

}
const removeNotes = (title)=>{
const notes = loadnotes()
const notestokeep = notes.filter((note)=>
     note.title !== title
)
if(notes.length>notestokeep.length){
    console.log(chalk.green.inverse('Note removed!'))
    savedNotes(notestokeep)
}
else{
    console.log(chalk.red.inverse('No note found !'))
}


}
const savedNotes = (notes)=>{
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json',dataJSON)

}
const loadnotes = ()=>{
    // If there is no json file then the code will not run . To make it run even if that file is not present
    // we use try catch statement
    try{
        const databuffer = fs.readFileSync('notes.json')
        const datajson = databuffer.toString()
        return JSON.parse(datajson) // converts json file in object
    }catch(e){
        return []
    }
    
}
const listNotes = ()=>{
const notes = loadnotes()
console.log(chalk.blue.inverse('Your Notes'))
notes.forEach((note)=>{
    console.log(note.title)
})
}
const readnotes = (title)=>{
    const notes = loadnotes()
    const searchednotes = notes.find((note)=>note.title===title)
    if(searchednotes){
        console.log(chalk.inverse(searchednotes.title))
        console.log(searchednotes.body)
    }
    else{
        console.log(chalk.red.inverse('Error'))
    }
}
module.exports = {
    getnotes : getNotes,
    addnote : addnote,
    removeNotes : removeNotes,
    listNotes:listNotes,
    readnotes:readnotes,

}

