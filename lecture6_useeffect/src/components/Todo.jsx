import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers'
import React, { useEffect, useState } from 'react'

const Todo = () => {

    const [todo,setTodo]=useState([]);
    const [values,setValues]=useState("");
    const [page,setPage]=useState(1)

    useEffect(()=>{
        fetch(`http://localhost:8080/todos?_page=${page}&_limit= 3`)
        .then((r)=>r.json())
        .then((data)=>setTodo(data));
    },[page])
    const save=()=>{
        
 fetch("http://localhost:8080/todos ",
 {
     method:"POST",
     headers:{
         "content-type":"application/json"
     },
     body:JSON.stringify({
        
        title: values,
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
     <div key={e.id}>{e.title}</div>
      ))}

      <button onClick={()=>{
          setPage(page-1)
      }}>prev</button>
      <button onClick={()=>{
          setPage(page+1)
      }}>next</button>
  


  </>
    
  )
}

export default Todo