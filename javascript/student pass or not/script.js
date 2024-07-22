let sci= document.querySelector("#sci")
let math= document.querySelector("#math")
let nep= document.querySelector("#nep")
let eng= document.querySelector("#eng")
let health= document.querySelector("#health")

let btn= document.querySelector("button")
let h3= document.querySelector("h3")
h3.style.margin="0 auto"
h3.style.background="gray"
h3.style.width="50%"
// let total=(sci.value+math.value+nep.value+eng.value+health.value)
// let per=(total/500)*100

btn.addEventListener("click",()=>{
    let science=parseInt(sci.value)
    let mathe=parseInt(math.value)
    let nepali=parseInt(nep.value)
    let english=parseInt(eng.value)
    let hea=parseInt(health.value)
let total=science+mathe+nepali+english+hea
    let per=(total/500)*100

  
    if(per>90 && per<=100){
       
        h3.textContent=`Congratulations! You passed with an A+ and your percentage is ${per.toFixed(2)}% `
    }else if(per>80 && per<90){
       
        h3.textContent=`Congratulations! You passed with an A & your percentage is ${per.toFixed(2)}%`
    }
    else if(per>70 && per<80){
      
        h3.textContent=`Congratulations! You passed with a B+ & your percentage is ${per.toFixed(2)}%`
    }else if(per>60 && per<70){
      
        h3.textContent=`Congratulations! You passed with a B & your percentage is ${per.toFixed(2)}%`
    }
    else if(per>50 && per<60){
        h3.textContent=`you passed & your percentage is ${per.toFixed(2)}% `
    }else{
       
        h3.textContent=`Sorry, you failed & your percentage is ${per.toFixed(2)}%`
    }

})

// function calculateResult(){
//     let sci= document.querySelector("#sci").value
//     let math= document.querySelector("#math").value
//     let nep= document.querySelector("#nep").value
//     let eng= document.querySelector("#eng").value
//     let health= document.querySelector("#health").value
//     let total=(sci+math+nep+eng+health)
//     let per=(total/500)*100
//     console.log(per)
//     if(per>90 && per<=100){
//         h3.textContent=`your percentage is ${per}%`
//         h3.textContent="Congratulations! You passed with an A+"
//     }else if(per>80 && per<90){
//         h3.textContent=`your percentage is ${per}%`
//         h3.textContent="Congratulations! You passed with an A"
    

//     }else if(per>70 && per<80){
//         h3.textContent=`your percentage is ${per}%`
//         h3.textContent="Congratulations! You passed with a B+"
//     }else if(per>60 && per<70){
//         h3.textContent=`your percentage is ${per}%`
//         h3.textContent="Congratulations! You passed with a B"
//     }else if(per>50 && per<60){
//         h3.textContent=`your percentage is ${per}%`
//         h3.textContent="you passed"
//     }else{
//         h3.textContent=`your percentage is ${per}%`
//         h3.textContent="Sorry, you failed"
    
//     }
// }

