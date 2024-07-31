const data = [
  {
    id: "1",
    question: "Is it free?",
    
    answer:  "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.",
  },
  {
    id: "2",
    question: "Can I use these projects in my portfolio?",
    
    answer: "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
  },
  {
    id: "3",
    question: "Can I take the challenges as a beginner?",
 
    answer:  "For sure! Our challenges have five different levels of difficulty. We'd recommend starting with the newbie ones. You might also want to start with the HTML & CSS only challenges first. As you build up your skills and confidence, you can take on more complex projects.",
  },
  {
    id: "4",
    question: "Can I take the challenges as a beginner?",
    answer: `You can see all of our challenges here. To start a challenge, click the "Start Challenge" button on the challenge page. This will take you to the Challenge Hub, where you can download the starter files, including a README file which will help you get set up. We'd recommend starting with one of our newbie level challenges. You can then work your way up from there.`,
  },

  {
    id: "5",
    question: "How can I get help if I'm stuck on a challenge?",
   
    answer:  "The best (and quickest) way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions. We even have a dedicated 'help' channel! If you haven't joined yet, you can get an invite to our Discord server here.",
  },
  {
    id: "6",
    question: "Can I use libraries/frameworks on these projects?",
  
    answer: "Yes! Our challenges provide professional designs but there are no rules on what tools to use. So feel free to use anything you like to build your projects.",
  },
  {
    id: "7",
    question: "Am I guaranteed to get hired through the Hiring Platform?",
   
    answer: "We can’t offer any guarantees, unfortunately. You can showcase your skills and knowledge to recruiters on our Hiring Platform by completing challenges and engaging with the community. This may lead to job opportunities, but it also may not. We still recommend applying for jobs using traditional channels like job boards.",
  },
];

const accordionItem= document.querySelector(".accordion")

function createAccordionItem(){
  accordionItem.innerHTML=data.map((dataItem)=>(
      `<div class="accordion_item">
          <div class="accordion_title">
              <h3>${dataItem.question} </h3>
              <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div class="accordion_content"> 
              <p>${dataItem.answer} </p>
          </div>
      </div>`
  )).join(" ")
}


createAccordionItem()

const getAllAccordionTitle= document.querySelectorAll(".accordion_title")
getAllAccordionTitle.forEach((currentItem)=>{
  currentItem.addEventListener("click",()=>{
      if(currentItem.classList.contains("active")){
          currentItem.classList.remove("active")
      }else{
let getAllActiveList= document.querySelectorAll(".active")
getAllActiveList.forEach((activeItem)=>{
  activeItem.classList.remove("active")
})
currentItem.classList.add("active")

      }
  })
})
const addonItem = document.querySelector(".addons");
function createAddonItem() {
 addonItem.innerHTML=data.map((dataItem)=>{`
   <div class="addon_item">
        <div class="addon_title">
            <h3>${dataItem.question} </h3>
            <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class="addon_answer">
            <p>${dataItem.answer} </p>
        </div>
    </div>`
 }).join(" ")
    

  
}
createAddonItem();
