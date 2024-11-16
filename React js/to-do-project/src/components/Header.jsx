import { useState } from 'react';
import '../App.css';

export default function Header(){
    const [todo , setTodo] = useState([]);
    const [input , setInput] = useState("");

    function addInput(){
        let capitalizeInput  =  input.charAt(0).toUpperCase() + input.slice(1);
        if(capitalizeInput.trim()!==''){
            const currentTime = new Date().toLocaleTimeString();
            const task = {text : capitalizeInput , time : currentTime}
            setTodo([...todo,task]);
            setInput("");
        }
    };

    function handleInputChange(e){
        setInput(e.target.value);
    };

    function removeTask(index){
        let newTask = [...todo];
        newTask.splice(index , 1);
        setTodo(newTask);
    }
    return(
        <>
         <div className='container'>
            <header className='header'>To Do List </header>
            <form className='form-input' onSubmit={(e)=>e.preventDefault()}>   
                <input 
                placeholder='Add your task'
                value={input}
                onChange={handleInputChange}
                />
                <button className='btn-main' onClick={addInput}>Add</button>
            </form>
            <ul>
                {todo.map((task , index)=>(
                    <li className='task' key={index}>{task.text} : {task.time}
                    <button className='btn-remove' onClick={()=>removeTask(index)}>Remove</button>
                    </li>
                ))}
            </ul>
         </div>
        </>
    )
}