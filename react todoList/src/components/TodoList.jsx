import React, { useState } from "react";

const TodoList = () => {
  const [todoItem, setTodoItem] = useState({
    title: "",
    id: null, // to track the item being edited
  });
  const [todoItems, setTodoItems] = useState([]);

  const handleInputChange = (e) => {
    setTodoItem({
      ...todoItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (id) => {
    // Find the item to edit
    const itemToEdit = todoItems.find((item) => item.id === id);
    setTodoItem(itemToEdit); // Load the item into the input for editing
  };

  const handleDelete = (id) => {
    // Remove the item from the list
    setTodoItems(todoItems.filter((item) => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoItem.id === null) {
      // Adding a new item
      setTodoItems([
        ...todoItems,
        { ...todoItem, id: new Date().getTime() }, // assign a unique id
      ]);
    } else {
      // Editing an existing item
      setTodoItems(
        todoItems.map((item) => (item.id === todoItem.id ? todoItem : item))
      );
    }

    // Reset the input
    setTodoItem({
      title: "",
      id: null,
    });
  };
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
            className="px-sm py-xs bg-blue-500 rounded text-white hover:bg-blue-700"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(item.id)}
            className="px-sm py-xs bg-red-500 text-white rounded hover:bg-red-700 "
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
