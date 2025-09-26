let a = 'Laurence Svekis'
let b = 10
a = 'Hello World'
a= "Changing a "
a = "adding 'single quotes'"
let val = a
let mystr1 = 'Hello\'s World'
let mystr2 = "Hello \" World"
let mystr3 = `Hello's World`
let templit = `Math ${4+5+6}`;
console.log(templit)
console.log(mystr2)
console.log(val)
// We can change let
// const cannot be changed
const myname = 'Laurence Svekis'
{
    const a = 1000
    console.log(a)
    let c = 500
}
// Alert this will give error because let c is created inside block
// and is getting accessed after its scope so it will throw error
// console.log(c)
document.write(val)
document.write(b)