import React from 'react'  
import Todo from './Todo'
import {useState} from 'react'; 
import TodoForm from './Form';
import '../css/TodoList.css'

function TodoList(){

  const [todos, setTodos] = useState([]);

  function addTodo(todo){
    setTodos([todo, ...todos]);
  }

  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id!==id));
  }

  return (
    <div>
      <h1 align="center" >Todolist</h1>
      <label id="formLabel" >Insert todo</label>
      <TodoForm addTodo={addTodo}/>
     <ul>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
        ))}
     </ul>
    </div>
    )
}
  
      
  
export default TodoList;