import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
    task?:ITask,

}
const TodoTask = ({task}:Props) => {
  return (
    <div className='task'>
        <div className='content'>
           <span className='spanItem'>
             {`Task:${task?.taskName}`}
            </span>
            <span className='spanItem'>
             {`Deadline: ${task?.deadline}`}
            </span>
        <button className='deleteBtn'>X</button>
        </div>
        </div>
  )
}

export default TodoTask