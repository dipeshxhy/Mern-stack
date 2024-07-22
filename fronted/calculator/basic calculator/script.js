const btns= document.querySelectorAll("button")
const input= document.getElementById("result")

for(let i=0;i<=btns.length;i++)
{
    btns[i].addEventListener("click",()=>{
        const btnvalue=btns[i].textContent
        if(btnvalue==='C'){
            clearResult()
        }else if(btnvalue==="="){
            calculateResult()
        }
        else{
            appendValue(btnvalue);
        }
    })
}


function clearResult(){
    input.value=""
}
function calculateResult(){
    input.value=eval(input.value)
}

function appendValue(btnvalue){
    input.value+=btnvalue
}