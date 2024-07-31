let enterData=""
function clickedBtn(data){
    enterData+=data;
    // document.getElementById("display").innerText=enterData;
    display.innerHTML=enterData
    // console.log(enterData)
}
function calculatedData(){
    display.innerHTML=enterData
    let result=eval(enterData);
    enterData=result;
    // document.getElementById("display").innerText=result;
    display.innerHTML=result;
    // enterData=""    
      console.log(result)
}
function clearScreen(){
    enterData=""
    // document.getElementById("display").innerText=""
    display.innerHTML=""
    console.log(enterData)
}
function deleteNumber(){
    enterData=enterData.slice(0,-1);
    // document.getElementById("display").innerText=enterData
    display.innerHTML=enterData
    // console.log(enterData)
}

let display=document.querySelector(".rec1-color")
