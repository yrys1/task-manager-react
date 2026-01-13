
import { useState,useEffect } from "react"


import TaskBoard from "./TaskBoard"
import AddtaskForm from "./AddtaskForm"



const ProjectList=()=>{
    const[task,setTasks]=useState("")
    const[description,setDescription]=useState("")
    const[arrTask,setArrTask]=useState(()=>{
        const safeTask=localStorage.getItem("taskKey");

        return safeTask? JSON.parse(safeTask):[]
    })

    const[filt,setFilter]=useState("all")

    const filterTask=arrTask.filter((item)=>{
        if(filt==="all") return true;
        return item.status===filt;
        
    })
    const addTask=()=>{
        if(task.trim()==="") return;

        const newObject={
            id:Date.now(),
            name:task,
            description,
            status:"todo"
        }

        setArrTask(prev=>[...prev,newObject])
        setTasks("")
        setDescription("")
    }

    const deleteTask=(id)=>{
        setArrTask(prev=>
            prev.filter((item)=>item.id!==id)
        )
    }

    const changeStatus=(id,newStatus)=>{
        setArrTask(prev=>
            prev.map(item=>
                item.id===id
                ?{...item,status:newStatus}
                :item
            )
        )
    }

    useEffect(()=>{
        localStorage.setItem("taskKey",JSON.stringify(arrTask))
    },[arrTask])


    return(
        <div className="container">
       <AddtaskForm
       task={task}
      description={description}
      setTasks={setTasks}
      setDescription={setDescription}
      addTask={addTask} />
      <div className="filter-bar">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("todo")}>Todo</button>
        <button onClick={() => setFilter("in-progress")}>In Progress</button>
        <button onClick={() => setFilter("done")}>Done</button>
        </div>

        <TaskBoard
        arrTask={filterTask}
        deleteTask={deleteTask}
        changeStatus={changeStatus}/>
        </div>
    )
}

export default ProjectList;