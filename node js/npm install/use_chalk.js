// chalk used in styling and printing message in color
const chalk = require('chalk')
const greenmsg = chalk.green('Sucess!')
const greenmsg1 = chalk.bold.green('Sucess!')
const greenmsg2 = chalk.green.bold('Sucess!')
const greenmsg3 = chalk.green.inverse.bold('Sucess!')



console.log(chalk.green(greenmsg2))