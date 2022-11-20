import React, {useState} from 'react';
import uuid from "react-uuid";


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
        <input type="text" name="todo" onChange={handleInput} value={todo.description}/>
        <button type="submit">Add</button>
       </form> 
       </div>
    );
    
}
