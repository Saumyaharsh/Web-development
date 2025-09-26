var user1 = 'Laurence';
let user2 = 'Laurence';
const user3 = 'Laurence';
if(true){
// Block 1
var user1 = 'Mike';
let user2 = 'Mike';
const user3 = 'Mike';
console.log(`${user1} ${user2} ${user3}`); // Mike Mike Mike

}
// u can't reassign const
// let and const are block scope
// If we are redeclaring let and const inside block it will be specific to that block
// If we are reassigning let in the block - first it will check in its block, if not found then it will look
// for that variable in its parent

// For var - if we redeclare new var of same name in the new block and assign it some value , it will update the value
// in its parent also- so they are not block scope
console.log(`${user1} ${user2} ${user3}`) // Mike Laurence Laurence
