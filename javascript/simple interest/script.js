let principal=document.querySelector("#principal")
let time=document.querySelector("#time")
let rate=document.querySelector("#rate")
let output=document.querySelector(".output")
let btn=document.querySelector("button")


btn.addEventListener("click",()=>{
    let p=parseFloat(principal.value)
    let t=parseFloat(time.value)
    let r=parseFloat(rate.value)
    let simpleInterest=p*t*r/100
  output.classList.add("result")
    output.textContent=simpleInterest.toFixed(2)
   output.style.color="green";
})