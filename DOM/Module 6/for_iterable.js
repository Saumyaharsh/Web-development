const arr = [1,2,3,4,5];
const str = 'Laurence';
// for in used for uinterable , in iterable it will show index
// for of used for iterable object

// Object is uniterable
const myobj = {
    name:'Saumya',
    age:22,
}  

// used to print property
for(let val in myobj){
   // console.log(val)
}


// Print index of str
for(let val in str){
    console.log(val)
}




// For iterating letter
for(const letter of str){
    // console.log(letter);
    // console.clear()
}

((...arg)=>{
for(const val of arg){
    console.log(val);
}
})(1,2,34,5,6);

(function(){
    for(const val of arguments){
        console.log(val)
    }
})(1,2,3,4,5,5,6,7)




for(let i = 0; i<arr.length; i++){
  //  console.log(arr[i])
}
for(const val of arr){
    // cannot change the val
  //  console.log(val)
}

for(let val of arr){
    // can change using let
    val ++;
  //  console.log(val)
}
