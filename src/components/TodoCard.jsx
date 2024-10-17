import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodos,index, handleEditTodos} = props
  return (
    <div>
     <li className="todoItem">
     {children}  
            <div className='actionsContainer'>
            <button onClick={() =>{
              handleDeleteTodos(index)
            }}>
            
            <i class="fa-regular fa-trash-can"></i>
            
            </button>

            <button onClick={() =>{
              handleEditTodos(index)
            }}>

            <i class="fa-solid fa-pen-to-square"></i>

            </button>
            </div>
              
          </li>
    </div>
  )
}
