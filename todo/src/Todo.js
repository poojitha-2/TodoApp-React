import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDelete } from '@fortawesome/free-solid-svg-icons'
const Todo = () => {
  const [taskinput,setTaskInput] = useState('');
  const [todos,setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const handlesubmit = (e) =>{
    e.preventDefault();
    if(editIndex !== null){
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = taskinput;
      setTodos(updatedTodos);
      setEditIndex(null);
    }
    else{
      setTodos([...todos, taskinput]);
    }
    setTaskInput('');
  }
  const handleDelete = (indexvalue) => {
    const setodos = todos.filter((todo,index) => index !== indexvalue)
    setTodos(setodos);
  };
  const handleedit =(indexvalue)=>{
    setTaskInput(todos[indexvalue]);
    setEditIndex(indexvalue);
  
  }
  return (
    <div style={{'font-family':'Caveat'}} className="h-[100vh] flex flex-col items-center justify-center">
      <div className='  rounded p-8 bg-[#8EE4AF] '>
        <h1 className='text-center mb-4 text-4xl'>Todo List</h1>
        <form className='flex gap-1 mb-5 text-xl ' onSubmit={handlesubmit}>
        {/* <TextField id="outlined-basic" label="Add tasks here" variant="outlined" value={taskinput} /> */}
        <input className='border border-[#bbb] rounded px-5 py-2 w-95  outline-0' type='text' placeholder='Add tasks here' value={taskinput} autoFocus onChange={(e)=>setTaskInput(e.target.value)}/>
        <button className=' px-4  rounded bg-[#05386B] text-[#EDF5E1] ' type='submit'>Add Task</button>
        </form>
        {todos.map((todo,index)=>{
          return(
          <tr className='p-[3px]'>
            <div className='w-[300px] text-2xl relative'>
              <td className='flex justify-between text-[#05386B] bg-[#EDF5E1] p-3 rounded grow max-w-full'>{todo}
              <svg className='fill-[#ccc] cursor-pointer mt-1 hover:bg-[#05386B] p-1 h-6 absolute left-[235px]  rounded' onClick={()=>handleedit(index)} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
              <svg className='fill-[#ccc] cursor-pointer mt-1 hover:bg-[#05386B] p-1 h-6 rounded' onClick={()=>handleDelete(index)} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
              </td>
              <hr className='border border-[#ccc]'/>
            </div>
          </tr>
          )
        }
        )}
      </div>
    </div>
  )
} 
export default Todo
