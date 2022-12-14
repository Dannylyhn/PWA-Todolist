import React, {useState} from 'react';
import uuid from "react-uuid";
import '../css/Form.css'


export default function TodoForm({addTodo}){

    const [todo, setTodo] = useState({
        id:"",
        description:"",
    });

    function handleInput(event){
        setTodo({...todo, description: event.target.value});

    }

    function handleSubmit(event){
        event.preventDefault();
        if(todo.description.trim()){
            addTodo({...todo, id: uuid()})
            setTodo({...todo, description: ""});
        }
    }

    return(
       <div class="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
        <input placeholder="Insert todo..." class="form-control" type="text" name="todo" onChange={handleInput} value={todo.description}/>
        <button id="btnAddForm" class="btn btn-primary" type="submit">Add todo</button>
        </div>
       </form> 
       </div>
    );
    
}
