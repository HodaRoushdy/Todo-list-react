
import { useRef, useState } from 'react';
import './App.css';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Edu+TAS+Beginner&family=Gilda+Display&family=Playpen+Sans:wght@500&display=swap');
</style>
function App() {
  const [tasks,setTasks] = useState([])
  const taskRef = useRef(tasks)

  const handleClick =()=>{
    const newTask = taskRef.current.value
    const newItem = {completed:false , newTask}
    setTasks([...tasks,newItem])
    taskRef.current.value =""
  }

const handlekDone =(id)=>{
const copyTasks = [...tasks]
copyTasks[id].completed = !copyTasks[id].completed
setTasks(copyTasks)
}

const handleDelete=(index)=>{
  const copyTasks = [...tasks]
  copyTasks.splice(index,1)
  setTasks(copyTasks)
}

  return (
    
    <div className="App">
    <div className='container'>
      <div className='content'>
      <h1>Todo List</h1>
      <input ref={taskRef} className='inputt' placeholder='enter your task...'/>
      <button className='btn' onClick={handleClick}>Add</button>
      <ul>
        {tasks.map(( {newTask,completed} ,index)=>{
          return <div className='forEveryTask'>
            <li className={completed ? 'complete' :''} onClick={()=>{handlekDone(index)}} key={index}> {newTask} </li>
            <span onClick={()=>{handleDelete(index)}}>❌</span>
            </div>
        })}
      </ul>
      </div>
    </div>
    <span className='copyRight'>made by Huda Roushdy</span>
    </div>
  );
}

export default App;
