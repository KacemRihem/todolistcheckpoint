import React, {useState} from 'react'

const Comp =(props)=>  {
    console.log(props)
    const [todos, setTodos]= useState(props.listTodos)
    const [text, settext]= useState("")
    const remove = (x) =>{
        var newTodos = todos.filter(el => el.todo !== x)
        setTodos(newTodos)}
    return (
        <div>
            <input type="text" onChange={(e)=> settext(e.target.value) } id="myInput" value={text}/>
            <button onClick={()=>{setTodos([...todos , {todo : text} ]);
            settext("")
        }}>add</button>
            {todos.map(el => 
            <div>
                <h1>{el.todo}</h1>
                <button onClick={()=>remove(el.todo)}>delete</button>
            </div>)}
        </div>
    )
}

export default Comp;