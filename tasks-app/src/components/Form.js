import React from "react";
import "../css/Form.css";
import {useState} from "react";
import {v4 as uuid} from "uuid"

function Form(props){

  const [input, setInput] = useState("")

  const manageSend = (e) => {
    e.preventDefault()
    const newTask = {
      id: uuid(),
      text: input,
      finished: false
    }

    props.onSubmit(newTask)
    
  }

  const manageChange = e => {
    const inputText = e.target.value;
    setInput(inputText)
  }
  
  return (
    <form className="form" onSubmit={manageSend}>
      <input 
        className="form-input"
        type = "text"
        placeholder = "Escribe una Tarea"
        name = "text"
        onChange = {manageChange}
        />

      <button className="form-button">
        Agregar
      </button>
    </form>
  )
}

export default Form;