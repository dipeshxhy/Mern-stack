const myCheckbox =document.getElementById("myCheckbox")
const visaBtn =document.getElementById("visaBtn")
const masterCardBtn =document.getElementById("masterCardBtn")
const PayPalBtn =document.getElementById("PayPalBtn")
const subResult =document.getElementById("subResult")
const paymentResult =document.getElementById("paymentResult")
const myBtn =document.getElementById("myBtn")



myBtn.onclick=function(){
    if(myCheckbox.checked)
    {
        subResult.textContent=`You are subscribed!`
        subResult.classList.add('green')
        
    }else{
        subResult.textContent=`You are NOT subscribed!`
        subResult.classList.add('red')
    }

    if(visaBtn.checked){
        paymentResult.textContent=`You are paying with visa`
        paymentResult.classList.add('green')
    }else if(masterCardBtn.checked){
        paymentResult.textContent=`You are paying with Mastercard`
        paymentResult.classList.add('green')

    }else if(PayPalBtn.checked){
        paymentResult.textContent=`You are paying with PayPal`
        paymentResult.classList.add('green')

    }else{
        paymentResult.textContent=`you have to select payment method first `
paymentResult.classList.add('red')
    }
}
