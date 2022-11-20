import React from "react"
import '../css/Todo.css'


export default function Todo({todo, deleteTodo}) {
    return (
        <div id="divTodo" class="d-flex justify-content-center">
        <input id="myCheckBox" type='checkbox'></input>
        <li> {todo.description} </li>
        <button onClick={handleRemoveClick}>Remove</button>
        </div>
    );

    function handleRemoveClick(){
        deleteTodo(todo.id);
    }
  }
  