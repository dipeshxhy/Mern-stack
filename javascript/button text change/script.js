let btn=document.querySelector("button")
let h1=document.querySelector("h1")
btn.addEventListener("click",()=>{
    btn.textContent="Downloading..."
    btn.style.backgroundColor="green"
    h1.textContent="Download completed"
})