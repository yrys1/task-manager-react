const AddtaskForm=({
    task,
    description,
    setTasks,
    setDescription,
    addTask
})=>{

    return(
        <div>
             <input type="text" 
        value={task}
        placeholder="Input task"
        onChange={(e)=>setTasks(e.target.value)}/>
        <p></p>
        <textarea value={description}
        onChange={(e)=>setDescription(e.target.value)}
        placeholder="input description"
        />

        <button onClick={addTask}>Add</button>

        </div>
    )
}

export default AddtaskForm

