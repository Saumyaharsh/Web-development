const output = document.querySelector('div')
const myinput = document.querySelector('input')
const btn = document.querySelector('.button')
btn.onclick = btnclicked;
myinput.value = 'Laurence';
const arr1 = ['One'];
const temparr = ['onex','twox','threex'];
const arr = arr1.concat(temparr,temparr)
function btnclicked(){
const val = myinput.value;
let temp = arr.push(val,'LAST'); // add to array and return the array length
console.log(temp);
console.log(arr)
temp = arr.pop() // removes last 
console.log(temp)
temp = arr.shift() // remove last item
console.log(temp)
console.log(arr.length)
arr[arr.length-1] = 'LAST';
// delete arr[0]
// console.log(arr);
arr.push('one','two','three');
// temp = arr.splice(1) // return the array with all the items after index 1
// temp = arr.splice(1,3)
temp = arr.splice(1,3);
console.log(temp)
temp = arr.splice(1,3,'Add1', 'Add2', 'Add 3');
console.log(temp);
temp = arr.splice(3,0,'New 1','New2','New3');
console.log(temp)
temp = arr.slice() // duplicate array as new array
temp [0] = 'TEST';
temp = arr.slice(5);// return array items from index 5
temp = arr.slice(1,4); // return portion of array using slice
console.clear();
console.log(temp);
console.log(arr);
const mystr = arr.toString();
const mystr1 = arr.join('-');

output.innerHTML = `<div>${mystr}</div>`;
console.log(arr);
console.log(mystr);
console.log(mystr1)





}