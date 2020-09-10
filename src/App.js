import React, {useState} from 'react';
import './App.css';
import Comp from './Comp'

function App() {
  const listTodos = [
    {todo: "eat" },
    {todo: "work" },
    {todo: "sleep" },
  ]
  return(
    <div>
      <Comp listTodos={listTodos}  />
    </div>
  )
}

export default App;
