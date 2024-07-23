const input=document.getElementById("title")
const statusInput=document.getElementById("status")
const outputDiv=document.querySelector(".output")
const items=[]
const addItem=()=>{
    if(input.value==""){
        alert("Please enter a title")
        return
    }
    else{
        items.push({
            title:input.value,
            status:statusInput.value
        })
        input.value =""
        displayItem();
        // statusInput.value ="incomplete"
    }

};

const displayItem=()=>{
      outputDiv.innerHTML=""
    items.forEach((v,key)=>{
       if(v.status=="complete"){
        
        outputDiv.innerHTML +=`<div >${v.title}   <input type="checkbox" checked/></div>`;
       }else{
        outputDiv.innerHTML +=`<div>${v.title}  <input type="checkbox" /></div> `;
    
       }
    })
}

    
