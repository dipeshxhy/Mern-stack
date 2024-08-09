// const {add,sub,mul,divide,person}=require("./function")


// console.log(add(2,3)); // Output: 5
// console.log(sub(2,3)); // Output: 5
// console.log(mul(2,3)); // Output: 5
// console.log(divide(2,3)); // Output: 5

// function showPersonDetails(person){
//     console.log(`Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation} , message:${person.greet()}`);
// }
// showPersonDetails(person)

//->node 02

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.listen(3002,()=>{
//     console.log('Server running at http://localhost:3002/');
// })



//->file system

const fs = require('fs');

//write file
fs.writeFileSync('./test.text',"hi hello hi hi hi hi hi hi")

//read file

// const data = fs.readFileSync('./test.text')
// console.log(data.toString())
const result=fs.readFileSync('./test.text','utf-8')

console.log(result)

//append file

fs.appendFileSync('./test.text',`${Date.now()}`)
