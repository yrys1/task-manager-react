const TaskCard=({
    item,
    deleteTask,
    changeStatus,
    

})=>{

    return(
        <li className={`task-card ${item.status}`} 
               >
            {item.name}
            

            <div>{item.description}</div>


            <button 
            className="delete-btn"
            onClick={()=>deleteTask(item.id)}>Delete</button>
            <select value={item.status}
            onChange={(e)=>changeStatus(item.id,e.target.value)}>
                <option value="todo" >Todo</option>
                <option value="in-progress" >In Progress</option>
                <option value="done" >Done</option>
            </select>
            

        </li>
        
    )

}

export default TaskCard;