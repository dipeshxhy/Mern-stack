let input= document.querySelector("input")
let btn= document.querySelector("button")
let h3= document.querySelector("h3")

btn.addEventListener("click",()=>{
    let age=input.value
    if(age>=18){
        h3.textContent="You are eligible to vote"
        h3.style.color="green"
    }
    else{
        h3.textContent="You are not eligible to vote"
        h3.style.color="red"
    }
})