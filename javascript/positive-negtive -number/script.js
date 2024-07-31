let input= document.querySelector("input")
let btn= document.querySelector("button")
let output= document.querySelector(".output")

btn.addEventListener("click",()=>{
    let num=input.value
    if(num >0){
        output.textContent=`The ${num} is positive`
    }
    else{
        output.textContent=`The ${num} is negative`
    }
    input.value=""
})