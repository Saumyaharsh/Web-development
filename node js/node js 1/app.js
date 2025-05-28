/*

const fs = require('fs')
//fs.writeFileSync('notes.txt','My name is Saumya')
fs.appendFileSync('notes.txt'," I live in Ranchi")
*/

/*

// New code
const add = require('./utils.js')
const sum = add(4,-2)
console.log(sum)

*/

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)