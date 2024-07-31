let input=document.querySelector("#number")
let btn=document.querySelector("button")
let output=document.querySelector(".output")

btn.addEventListener("click",()=>{
    let num=input.value
    if(num%2==0){
output.textContent=`${num} is Even`
output.style.color="green";
    }
    else{
        output.textContent=`${num} is Odd`
        output.style.color="red"
    }
})