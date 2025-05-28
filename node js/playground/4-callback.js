/*

setTimeout(()=>{
    console.log('Two seconds are up')
},2000)

const names = ['Andrew','Jen','Jess']
const shortNames = names.filter((name)=>{
    return name.length<=4

})

// Demo 
const geocode = (address,callback)=>{
    setTimeout(()=>{
        const data = {
            latitude:0,
            longitude:0,
        }
        callback(data)
    },2000)

}
 geocode('Philadelphia',(data)=>console.log(data))

 // Challenge using callback 

const add = ((a,b,callback)=>{
    setTimeout(()=>{
        sum = a+b
        callback(sum)

    },2000)
    
})
add(7,5,(sum)=>{
    console.log('Sum is '+sum)
})

*/
