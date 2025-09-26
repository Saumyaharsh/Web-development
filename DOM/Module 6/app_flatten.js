function flattenarray(arr){
 return arr.reduce((acc,val)=>{
    return Array.isArray(val) ? acc.concat(flattenarray(val)) : acc.concat(val)
 },[])
}



const nestedarray = [1,[2,[3,4],5],6,[7,8]]
console.log(nestedarray);
const flatarray = flattenarray(nestedarray);
console.log(flatarray)