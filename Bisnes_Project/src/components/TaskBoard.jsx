import TaskCard from "./TaskCard";

const TaskBoard=({
     arrTask,
     deleteTask,
     changeStatus
     
})=>{
    
    return(
        <div>
            <ul>
                {arrTask.map((item)=>
                
                <TaskCard
                key={item.id}
                item={item}
                deleteTask={deleteTask}
                changeStatus={changeStatus}
                />
                
                )}
            </ul>
        </div>
    )
}
export default TaskBoard;