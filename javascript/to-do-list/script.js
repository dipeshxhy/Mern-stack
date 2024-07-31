const input= document.querySelector("input")
let btn= document.querySelector(".btn")
let output= document.querySelector(".task-list")
const todoItem=[]
btn.addEventListener("click",()=>{
    let value=input.value
    todoItem.push(value)
    input.value=""
    output.innerHTML=""
    todoItem.forEach((item,index)=>{
        output.innerHTML+= `<div>${item} 
        <input type="checkbox" ></div>`
    })

})