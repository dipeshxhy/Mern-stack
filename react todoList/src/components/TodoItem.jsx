import React, { useState } from "react";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

const Todoitem = () => {
 const [todoItem,setTodoItem]=useState({
    title:'',
    id:null
 })
 const [todoItems,setTodoItems]=useState([])
 const handleEdit=(id)=>{
    const editItem=todoItems.find(item=>item.id===id)
    setTodoItem(editItem)
 }
 const handleDelete=(id)=>{
    setTodoItems(todoItems.filter(item=>item.id!==id))
 }
 const handleInputChange=(e)=>{
    setTodoItem({
        ...todoItem,
        [e.target.name]:e.target.value
    })
 }
 const handleSubmit=(e)=>{
    e.preventDefault()
    if(todoItem.id===null){
        setTodoItems([
            ...todoItems,
            {...todoItem,id:new Date().getTime()}
        ])
    }else{
        setTodoItems(todoItems.map(item=>(
            item.id===todoItem.id?todoItem:item
        )))
    }
    setTodoItem({
        title:'',
        id:null
    })
 }

  return (
    <div className="w-[40%] bg-red-200 mx-auto p-md rounded-lg shadow-orange-600">
      <h1 className="text-center text-3xl text-orange-500 font-semibold">
        To do List
      </h1>
      <form action="" onSubmit={handleSubmit} className="mx-auto ml-[10%] ">
        <input
          className="p-xs outline-none w-1/2 rounded text-md "
          type="text"
          name="title"
          id="title"
          value={todoItem.title}
          onChange={handleInputChange}
          placeholder="Add your task here.."
        />
        <input
          className={`ml-sm rounded px-sm py-xs text-white ${
            todoItem.id === null
              ? "bg-blue-500"
              : "bg-red-500                                                                                                                                                                 "
          } `}
          type="submit"
          value={todoItem.id === null ? "Add" : "Update"}
        />
      </form>
      {todoItems.map((item) => (
        <div
          key={item.id}
          className="ml-[10%] m-sm py-xxs border-b-2 flex items-center gap-md text-xl "
        >
          {item.title}
          <button
            onClick={() => handleEdit(item.id)}
            className="px-sm py-xs  bg-blue-500 rounded text-white hover:bg-blue-700"
          >
           <MdEdit />
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className="px-sm py-xs bg-red-500 text-white rounded hover:bg-red-700 "
          >
           <AiFillDelete/>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todoitem;
