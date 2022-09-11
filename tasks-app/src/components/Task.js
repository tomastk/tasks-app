import React from "react";
import '../css/Task.css';
import { AiOutlineCloseCircle } from "react-icons/ai"

function Task ( {id, text, finished = false, setFinished, deleteTask} ) {

  const taskStatusClass = finished ? "finished" : "no-finished";
  
  return(
    <div className={`task ${taskStatusClass}`}>
      <div 
        className="task-text" 
        onClick = {() => { setFinished(id)}}>
        {text}
      </div>
      <div className="task-icon"
           onClick={() => {deleteTask(id)}}>
        <AiOutlineCloseCircle className="task-icon"/>
      </div>
    </div>
  )
}

export default Task;