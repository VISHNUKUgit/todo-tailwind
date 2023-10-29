import React, { useState } from 'react';

function Display({ todos,setTodos,setInput,input,setEditMode,id,setId }) {
  
  const handleDelete = (idToDelete)=>{
    
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    // Update the state with the new todos array
    setTodos(updatedTodos);
    setInput("")
    setEditMode(false)
    setId("")
    
  }
  const handleEdit = (index,id)=>{ 
    setInput(todos[index].title)
    setEditMode(true)
    setId(id)
    

  }
  const handleTask =(id,todoCompleted)=>{
   if(todoCompleted){
    const upd_obj = todos.findIndex((obj => obj.id === id));
    todos[upd_obj].completed = false;
    const updatedTodos = [...todos];
    setTodos(updatedTodos);
    
  }else{
    const upd_obj = todos.findIndex((obj => obj.id === id));
    todos[upd_obj].completed = true;
    const updatedTodos = [...todos];
    setTodos(updatedTodos);
    
  }

  }
  
  return (
    
    <div>
      
      {todos.map((todo,index) => (
          
          <li key={todo.id} className='flex justify-between  border-solid border-2 my-3 p-2 '>
           <input className="font-semibold w-3/4 sm:w-4/5" style={todo.completed ? { textDecoration: "line-through" } : {}} type="text" value={`${index+1}. ${todo.title}` } onChange={(e)=>e.preventDefault()} disabled />
           <div>
            <button style={todo.completed ? { color: "green" } : {}} className='button-complete  cursor-pointer text-2xl ' onClick={()=>handleTask(todo.id,todo.completed)}>
            <i class="fa-regular fa-square-check "></i>
            </button>
           
            <button className='button-edit task-button cursor-pointer cursor-pointer text-2xl mx-1' onClick={()=>handleEdit(index,todo.id)} >
            <i class="fa-solid fa-pen-to-square fa-sm"></i>
            </button>
           
            <button className='button-delete task-button cursor-pointercursor-pointer text-2xl' onClick={() => handleDelete(todo.id)}>
            <i class="fa-solid fa-trash-can fa-sm"></i>
            </button>
            </div>
            </li>
          
        ))}
    </div>
  );
}

export default Display;