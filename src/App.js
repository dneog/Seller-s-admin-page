
import { useEffect, useState } from 'react';
import './App.css';
import InputForm from './InputForm';
import ShowItem from './ShowItem';

function App() {
  const [tasks, setTasks]= useState(JSON.parse(localStorage.getItem('tasks')) || []);
  useEffect(()=> {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])
  return (
    <div className='App'>
      <InputForm tasks={tasks} setTasks={setTasks} />
      <ShowItem  tasks={tasks} setTasks={setTasks} />
      
   
    
    </div>
  )
};

export default App;
