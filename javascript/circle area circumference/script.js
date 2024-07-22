let input=document.querySelector("input")
const PI=3.14;
let btnArea= document.querySelector("#area")
let btnCircumference= document.querySelector("#circumference")
let output=document.querySelector(".output")
let circum=document.querySelector("#circum")
btnArea.addEventListener("click",()=>{
    let radius= input.value
    let area=PI*radius*radius
output.textContent=`Area of circle is ${area.toFixed(2)}`
output.style.color="green"
})
btnCircumference.addEventListener("click",()=>{
    let radius= input.value
    let circumference=2*PI*radius
output.textContent += ` Circumference of circle is ${circumference.toFixed(2)}`
circum.style.color="blue"

})
