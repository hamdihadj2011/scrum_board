import React from 'react'

//create a task 
const Task = (props) => {
    
    const {task = {}} = props
        return (
        <div className="task" id={task.id} raggable="true" onDragStart={(e)=>{ 
            e.dataTransfer.setData("text", e.target.id);
            } }>
          <h2>   
            {task.name}</h2>
            <p>{task.Task}</p>
            <div>
        </div></div> 
            );
     
    }

export default Task