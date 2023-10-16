import React, { useState,FC,ChangeEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ITask } from './Interfaces'
import TodoTask from './Components/TodoTask'
import Header from './Components/Header/Header'

const App:FC = () => {
  // state
  const [task,setTask] = useState<string>('');
  const [deadline,setDeadline] = useState<number>(0);
  const [todoList,setTodoList] = useState<ITask[]>([])

  // functions
  const changeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    if(e.target.name ==='task'){
      setTask(e.target.value);
    }
    setDeadline(Number(e.target.value))
  }
  const addTask = ():void =>{
    const newTask = {
      taskName:task,
      deadline:deadline,
    }
    setTodoList([...todoList,newTask])
    setTask('')
    setDeadline(0)
    console.log(todoList)
    
  }
  return (
    <div className='app'>
    {/* <div className='header'></div> */}
      <Header />
      <label htmlFor='task'>Task</label>
      <input 
        required
        type='text' 
        placeholder='Task...' 
        name='task' 
        onChange={changeHandler} 
        value={task}
      />
      <label htmlFor='deadline'>Deadline</label>
      <input 
        type='number' 
        name='deadline'
        placeholder='Deadline' 
        onChange={changeHandler}
        value={deadline}
      />
    <button className='newTaskBtn' type='button' onClick={addTask}>New Todo</button>
    
      <div>{todoList.map((task:ITask, key:number)=>{
                return <TodoTask key={key} task={task}/>
            })}
      </div>
    </div>
  )
}

export default App
