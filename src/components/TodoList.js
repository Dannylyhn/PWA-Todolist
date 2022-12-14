import React, { useEffect } from 'react'  
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
  
  useEffect(() => {
    document.body.style.background = "#001440";
  });

  return (
    <div>
      <h1 style={{ color: 'white', fontWeight: 'bold' }} id="hTitle" class="display-2" align="center" >A Simple Todolist</h1>
      <h1 style={{ color: 'white' }} id="hUnderTitle" class="display-4" >Insert todo</h1>
      <TodoForm addTodo={addTodo}/>
      <ul>
        <li>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>
        ))}
        </li>
     </ul>
    </div>
    )
}
  
      
  
export default TodoList;