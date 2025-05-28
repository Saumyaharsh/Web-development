//const square = function(x){
//    return x*x
//}
//console.log(square(3))

//    const square = (x) =>  x*x
//    console.log(square(3))


//    const square1 = (x) => {return x*x}
const event = {
    name:'Birthday Party',
    guestList:['Andrew','jen',"Mike"],
    printGuestList(){    // ES6 method definition syntax
        console.log('Guest list for '+  this.name)  
         // above is alternative we can use it as it bind their own this value we had removed colon and write as function
         // without function keyword
         // function using function keyword can also be used above
        //     arrow function can't access object properties like this.name etc
         // THey don't bind their own this value

         /*
             this.guestList.forEach(function(guest){
            console.log(guest+' is attending '+this.name) // This will give undefined in this.name since 
            // the function has own binding to solve this we use that = this and in dunction we write that.name
            // to access the provided name property

        // Other method : use arrow function since arrow function don't bind their own this value , they access
        // the this value
        })

        */
        this.guestList.forEach((guest)=>{
            console.log(guest+' is attending '+this.name)})
    }
   
}
event.printGuestList()



