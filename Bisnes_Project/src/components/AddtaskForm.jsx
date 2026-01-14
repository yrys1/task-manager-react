const AddtaskForm=({
    task,
    description,
    setTasks,
    setDescription,
    addTask,
    clearDone
})=>{

    return(
        <div className="add-task-form">
             <input type="text" 
        value={task}
        placeholder="Input task"
        onChange={(e)=>setTasks(e.target.value)}/>
        <p></p>
        <textarea value={description}
        onChange={(e)=>setDescription(e.target.value)}
        placeholder="input description"
        />

        <button  
        className="primary"
        onClick={addTask}>Add</button>
        <button 
       className="danger" 
        onClick={clearDone}>Delete done</button>

        </div>
    )
}

export default AddtaskForm

