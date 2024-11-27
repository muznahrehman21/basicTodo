import React from 'react'
import { useSelector } from 'react-redux'

function Todos() {
    const todos= useSelector(state=> state.todos)
    console.log (todos)
  return (
    <>
    <div>Todos</div>
    {todos.map((todo)=>(

<li 
className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded' 
key={todo.id}>
  <div>{todo.text}</div>
  
  
  
  
  
  
  
  
  
  
  
  
  </li>





    ))}
    </>
  )
}

export default Todos