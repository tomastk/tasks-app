import React, { useState} from "react";
import "../css/TaskList.css"

import Form from './Form'
import Task from './Task'

function TaskList() {

  const getLsTask = JSON.parse(localStorage.getItem('tasks'))
  
  const lsTasks = getLsTask === null ? [] : getLsTask

  
  const [tasks, setTasks] = useState(lsTasks)

 const setFinished = (id) => {
  const tasksUpdated = tasks.map(task => {
    if (task.id === id) {
      task.finished = !task.finished;
    }
    return task;
  })

  setTasks(tasksUpdated)
  localStorage.setItem('tasks', JSON.stringify(tasksUpdated))
 }

  
  const deleteTask = id => {
    const tasksUpdated = tasks.filter(task => task.id !== id)
    setTasks(tasksUpdated)
    localStorage.setItem('tasks', JSON.stringify(tasksUpdated))
  }
  
  const addTask = task => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const tasksUpdated = [task, ...tasks]
      setTasks(tasksUpdated)
      localStorage.setItem('tasks', JSON.stringify(tasksUpdated))
    }
  }
  
  return (
    <>
        <Form onSubmit={addTask}/>
        <div className="task-list">
          {
            tasks.map(task => {
              return (<Task 
                key = {task.id}
                id = {task.id}
                setFinished = {setFinished}
                deleteTask = {deleteTask}
                finished = {task.finished}
                text = {task.text} />)
            })
          }
        </div>
    </>
  )
}

export default TaskList;