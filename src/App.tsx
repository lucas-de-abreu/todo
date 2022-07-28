import { useState } from 'react';
import styles from './App.module.css';
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';
import { TaskList } from './components/TaskList';

import './global.css';

interface Task {
  id: number,
  completed: boolean,
  description: string,
}

function App() {
  const [idHelper, setIdHelper] = useState(0);
  const [tasks, setTasks] = useState<Task[]>([]);

  function createTask(task: string) {
    setTasks([
      {
        id: idHelper,
        completed: false,
        description: task,
      }, ...tasks
    ]);

    setIdHelper((state) => state + 1);
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter(task => task.id != id));
  }

  function completeTask(id: number) {
    setTasks(tasks.map(
      task => task.id === id 
        ? {...task, completed: !task.completed} 
        : task
    ));
  }


  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <main>
          <NewTask onCreateTask={createTask} />
          
          <TaskList onCompleteTask={completeTask} onDeleteTask={deleteTask} tasks={tasks} />
        </main>
      </div>
    </div>
  )
}

export default App
