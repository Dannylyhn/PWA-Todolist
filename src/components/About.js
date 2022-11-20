import React from 'react'  
import {Route, Link, BrowserRouter, Routes} from 'react-router-dom'  
import TodoForm from './Form'

class About extends React.Component {  
  render() {  
    return (
      <div align="center">
        <h1>About</h1>
        <p>This is a simple todo app :)</p>
      </div>
    )
  }  
}  

export default About