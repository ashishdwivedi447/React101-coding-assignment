import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers'
import React, { useEffect, useState } from 'react'

const Todo = () => {

    const [todo,setTodo]=useState([]);
    const [values,setValues]=useState("");

    useEffect(()=>{
        fetch("http://localhost:8080/todos?_page=1&_limit=4 ")
        .then((r)=>r.json())
        .then((data)=>setTodo(data));
    },[])
    const save=()=>{
        
 fetch("http://localhost:8080/todos ",
 {
     method:"POST",
     headers:{
         "content-type":"application/json"
     },
     body:JSON.stringify({
        
        task: values,
        status: false
      })
 }
 )
 .then((r)=>r.json())
        .then((data)=>{
            setTodo([...todo,data]);
            setValues("");
        }
        )
      
 
    }
    
  return (
    <>

<input value={values} placeholder="Enter to do" onChange={(e)=>{
    setValues(e.target.value);
}}/>

<button onClick={save}>Add</button>

  
      {todo.map((e)=>(
     <div key={e.id}>{e.task}</div>
      ))}
  


  </>
    
  )
}

export default Todo