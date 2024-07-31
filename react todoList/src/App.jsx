import React, { useState } from 'react'
import { IoAddCircle } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";


const App = () => {
  const [toDoItems,setToDoItems]=useState([])
const handleChange=(event)=>{
  // console.log(event.terget.name,event.target.value)
  setToDoItem(
    {
  
      ...toDoItem,
      [event.target.name]:event.target.value,
    }
   
  )
};
const [toDoItem,setToDoItem]=useState({
  title:'',
})
const submit=(event)=>{
  event.preventDefault();
  setToDoItems([...toDoItems,toDoItem])
  setToDoItem({title:''})
  
};
const deleteItem=(index)=>{
  // console.log("click in b")

setToDoItems(toDoItems.filter((v,key)=>key!==index))
};
let selectedIndex=-1;
const editBtn=(item,index)=>{
setToDoItems.filter((v,key)=>selectedIndex==key?)

}
  return (
    <div className='flex flex-col justify-center items-center w-80 m-auto mt-6 '>
     
      <div className='w-64 h-20 rounded bg-blue-200 flex flex-col justify-center items-center '>
      <h1 className='font-bold mt-[-10%]'>ToDo List</h1>
        <form action="" onSubmit={submit}>

<input className='border text-blue-400 rounded outline-none' type="text" name="title" onChange={handleChange} value={toDoItem.title} placeholder='Enter your task...' />
<button  onClick={submit} className='px-3 py-1   text-orange-400 rounded-lg font-bold'><IoAddCircle /></button>
        </form>

      </div>
<div className='bg-orange-300 w-64 rounded p-3 text-white '>
  {toDoItems.map((item,index)=>(
    <div className='flex items-center ' >{item.title} < AiFillDelete onClick={()=>{
      deleteItem(index)
    }}/>
    <button onClick={()=>editBtn((v,index))}>edit</button>
     </div>
  ))}
 
</div>
    </div>
  )
}

export default App