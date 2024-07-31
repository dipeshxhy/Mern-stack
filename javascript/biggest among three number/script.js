let first= document.querySelector("#first")
let second= document.querySelector("#second")
let third= document.querySelector("#third")
let h3= document.querySelector("h3")

let btn= document.querySelector("button")

btn.addEventListener("click",()=>{
    let a=parseInt(first.value)
    let b=parseInt(second.value)
    let c=parseInt(third.value)
    if(a>b && a >c)
    {
        h3.textContent=`The largest number is ${a}`
    }
    else if(b>a && b > c){
        h3.textContent=`The largest number is ${b}`
    }
    else{
        h3.textContent=`The largest number is ${c}`
    }
})