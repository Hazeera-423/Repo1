import { useState } from "react"

 const List12=()=>{
    const[task,setTask]=useState('')
    const[tasks,setTasks]=useState([])
    const addTask=()=>{
        if(task.trim()!==''){
            setTasks([...tasks, task])
            setTask('')
        }
    }
    return(
        <div>
        <input type="text" placeholder="Enter a task"  value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={addTask} >Add Task</button>
        <ul >
            {tasks.map((task1,index)=>(
                 <li key={index}>
                     {task1}
                 </li>
            ))}
           
        </ul>
        </div>
    )
 }
 export default List12