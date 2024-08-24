import React from 'react'
import TodoList from './components/TodoList'
import Todoitem from './components/TodoItem'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-300 py-[5%]  '>
      {/* <TodoList /> */}
      <Todoitem/>
    
    </div>
  )
}

export default App