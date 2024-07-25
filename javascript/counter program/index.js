const decreaseBtn= document.getElementById("decreaseBtn")
const resetBtn= document.getElementById("resetBtn")
const increaseBtn= document.getElementById("increaseBtn")
const counterNum= document.getElementById("counterNum")

let count=0
increaseBtn.onclick=function(){
    count++
    counterNum.textContent=count
}
decreaseBtn.onclick=function(){
    count--
    counterNum.textContent=count
}
resetBtn.onclick=function(){
    count=0
    counterNum.textContent=count
}