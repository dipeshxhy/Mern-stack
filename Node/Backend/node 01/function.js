

function add(a,b){
    return a+b
}
function mul(a,b){
    return a*b
}
function sub(a,b){
    return a-b
}
function divide(a,b){
    return a/b
}
const person={
    name:'dipesh',
    age:25,
    address:'new york',
    greet:function(){
        console.log(`Hello, My name is ${this.name} and I am ${this.age} years old`)
    }
}

module.exports = {
    add,
    mul,
    sub,divide,
    person
}