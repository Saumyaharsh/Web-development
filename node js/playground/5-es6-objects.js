// Object property shorthand
const name = "Andrew"
const userAge = 27

const user = {
    //name:name,
    name,
    // We cn use this shorthand when name(property) and name(variable) is same
    age:userAge,
    location:"Philadelphia"
}
console.log(user)

// Object destructuring
const product = {
    label:'Red notebook',
    price:'3',
    stock:201,
    saleprice:undefined
}
//const label = product.label
//const stock = product.stock

const{label, stock}=product
console.log(label)
console.log(stock)