//Using yargs for command line argument
// storing data with json
// we had installed json packages by installing validators and npm packages





const fs = require('fs')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { type } = require('os')

// Customize your version
yargs.version('1.1.0')

//  add, remove, read,list

// Create add command
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true, // generally it is false we have to make it true , It needs to be provided
            type:'string' // It will always need string
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        
        /*
        console.log('title:'+argv.title)
        console.log('body:'+argv.body)
        */
        notes.addnote(argv.title,argv.body)
     

        

    }
})
// create a remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
        notes.removeNotes(argv.title)
        console.log('Removing the note')
    }
})
// list command
yargs.command({
    command:'list',
    describe:'Add list',
   
    handler(){
        notes.listNotes()
    }
})

// Read command
yargs.command({
    command:'read',
    describe:'Reading',
    builer:{
        title:{
            describe:'Add title',
            demandOption:true,
            type:'string',
        }
    },
    handler(argv){
       notes.readnotes(argv.title)
    }

})
yargs.parse() // it does not take any arguments
// We can call it like this
// yargs.parse() goes through the process of parsing arguments with all of the configuration
// details that we have provided with our yargs commands above


//console.log(process.argv)
//console.log(yargs.argv)

//fs.writeFileSync('notes.txt','My name is Saumya')
/*
const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)
*/
