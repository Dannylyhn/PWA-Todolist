import React from "react"
import '../css/Todo.css'


export default function Todo({todo, deleteTodo}) {
    
    return (
        <div id="divTodo" class="card">
        <ul class="list-group list-group-flush">
            <div id="insideDivTodo">
            <input class="form-check-input" id="myCheckBox" type='checkbox'></input>
            <label style={{fontWeight: 'lighter', marginLeft: '5px'}} class="form-check-label" for="myCheckBox">Mark as done</label>
            </div>
            <li class="card-text" style={{fontWeight: 'bold'}} id="liTodoItem"> Todo: {todo.description} </li>
            <button class="btn btn-outline-danger" onClick={handleRemoveClick}>Remove</button>
        </ul>
        </div>
    );

    function handleRemoveClick(){
        deleteTodo(todo.id);
    }
  }
  