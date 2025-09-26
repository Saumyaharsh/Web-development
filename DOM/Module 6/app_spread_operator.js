const arr1  = [1,2,3,4];
 const arr4 = [...arr1]
arr1[1] = 0;
const arr2 = [5,6,7,arr1,8,9]
console.log(arr2)
// if not wanting nesting array 
const arr3 = [5,6,7,...arr1,8,9]
arr1[2] = 0;
console.log(arr3)

function adder(a,b,c,d){
return a+b+c+d;
}
function adder1(){
   let total = 0;
   for(const val of arguments){
    total += val;
   }
   return total
}
console.log(arr4)
console.log(adder(...arr1));
console.log(adder1(...arr1))

