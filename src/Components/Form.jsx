import React from 'react'
// import "../App.css"
import{v4 as uuidv4} from 'uuid';

function Form({input,setInput,todos,setTodos,editMode,setEditMode,id}) {
    const onInputchange = (event)=>{
            setInput(event.target.value)
    }
    const submit = (event)=>{
      event.preventDefault()
      if(editMode){
        console.log("proplem");
        const upd_obj = todos.findIndex((obj => obj.id === id));
        todos[upd_obj].title = input;
        setEditMode(false)
          
      }else{
        
        setTodos([...todos,{id:uuidv4(), title:input,completed:false}])
        
        
      }
      setInput("");  
        
    }
  return (
    <div>
        <form onSubmit={submit} className='flex justify-between'>
            <input type="text" placeholder='Enter a ToDo...' className='w-4/5 p-1 outline-none border-b-4 border-indigo-500 font-semibold' value={input}
            required onChange={onInputchange}/>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Form