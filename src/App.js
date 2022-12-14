import React from 'react';
import {Route, Link, BrowserRouter, Routes} from 'react-router-dom'  
import About from './components/About';
import Frontpage from './components/TodoList';
import './css/App.css'

function App() {
    return (

      <div id="divForApp">
      <nav id="navDiv">
      <ul class="nav justify-content-center">
      <li>
        <a style={{ color: 'white', fontWeight: 'bold' }} class="nav-link" href="/">TodoList</a>
      </li>
      <li>
        <a style={{ color: 'white', fontWeight: 'bold'}} class="nav-link" href="/about">About</a>
      </li>
       </ul>
      </nav>
      <div>
      <BrowserRouter>
         <Routes>
         <Route index element={<Frontpage/>}/>
         <Route path="/about" element={<About/>}/>
         </Routes>
        </BrowserRouter>
      </div>
      </div>
    );
}

export default App;