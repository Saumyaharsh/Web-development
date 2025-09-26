let mystr = 'Laurence'
let mynum = 0;
let a;
let b,c,d;
let val;
mystr = 5
mynum = 'test'
b = 5;
c = 10;
d = '20'
val = typeof(mynum)
console.log(val)
val = b+c+d; // added b+c that is 15 and d is string so converted 15 in string output - 1520
console.log(val)
val = d +c+b // 25105 ,d is a string so converted all in the string
console.log(val)
val = 100+d;
console.log(val)
d = Number('20')
console.log(d)
d = null; // It is different from undefined as we can assign it to variable
val = typeof(d)
console.log(val)
d = true;
d = false;
d = c.toString()
val = typeof(d)
console.log(val)

a = '10000X'
d = parseInt(a)
console.log(d)
val = typeof(d)
console.log(val)

a = '10a00X'
d = parseInt(a)
console.log(d)




document.write(val)