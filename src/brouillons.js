import React, { useState } from "react";
import "./App.css";
import Comp from "./Comp";

function App() {
    const listTodos = [
{ todo: "eat" }, 
{ todo: "work" }, 
{ todo: "sleep" }];
const [todos , setTodos] = useState(listTodos)
const [text , settext] = useState("")
const remove = (x) => {
    var newTodos = todos.filter(el => el.todo !== x)
    console.log(newTodos)
    setTodos(newTodos)
}
return (
    <div className="App">
    <input type="text" onChange={(e)=> settext(e.target.value) }/>
    <button onClick={()=>setTodos([...todos , {todo : text} ])}>add</button>
    {todos.map(el => 
    <div>
        <h1>{el.todo}</h1>
        <button onClick={()=>remove(el.todo)}>delete</button>
    </div>)}
}

export default App;
