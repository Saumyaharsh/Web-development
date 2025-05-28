/*
const book = {
    title:'Ego is the enemy',
    author:'Rayan Holiday'
}
const bookJSON = JSON.stringify(book)
/*
console.log(bookJSON)
const parseddata = JSON.parse(bookJSON)
console.log(parseddata.title)
*/

/*
const fs = require('fs')
fs.writeFileSync('1-json.json',bookJSON)

*/

/*
const fs = require('fs')
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data.title)
*/

const fs = require('fs')
const datajson = fs.readFileSync('1-json.json')
const data = datajson.toString()
console.log(data)
const parseddata = JSON.parse(data) // converted into object
parseddata.age = 22        // change object age
parseddata.name = 'Rekha'//changed object name
console.log(parseddata.name)
const data2 = JSON.stringify(parseddata)  // converted object to json
const data3 = data2.toString()   //  converted json to string
console.log(data3)
fs.writeFileSync('1-json.json',data2) // saved the new data in file overwriting the first data