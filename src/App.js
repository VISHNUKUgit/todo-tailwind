import { useState } from 'react';
import './index.css';
import Form from './Components/Form';
import Header from './Components/Header';
import Display from './Components/Display';


function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editMode, setEditMode] = useState(false)
  const [id, setId] = useState("")
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-red-100 " >
      <div className="w-11/12 sm:w-1/3 bg-white shadow-xl " style={{minHeight:'450px'}}>
        <div className='bg-blue-700'><Header /></div>
        <div className='p-3 '>
          <div><Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editMode={editMode} setEditMode={setEditMode} id={id} /></div>
          <div><Display todos={todos} setTodos={setTodos} setInput={setInput} input={input} editMode={editMode} setEditMode={setEditMode} id={id} setId={setId} /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
