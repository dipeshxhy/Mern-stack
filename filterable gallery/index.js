const btns=document.querySelectorAll(".btn")
const images= document.querySelectorAll(".project")
btns.forEach((btn)=>{
   btn.addEventListener('click',(e)=>{
    const filter=e.target.dataset.filter;
    images.forEach(item=>{
        if(filter=='all'){
            item.style.display="block"
        }else{
            if(item.classList.contains(filter)){
            item.style.display="block"

            }else{
            item.style.display="none"

            }
        }
    })
   })

})