import styles from './TaskList.module.css';
import Clipboard from '../assets/clipboard.svg';
import { Task } from './Task';

interface Task {
  id: number,
  completed: boolean,
  description: string,
}

interface TaskListProps {
  onCompleteTask: (id: number) => void,
  onDeleteTask: (id: number) => void,
  tasks: Task[],
}

export function TaskList({ tasks, onDeleteTask, onCompleteTask }: TaskListProps) {
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <div className={styles.createdTasks}>
          Tarefas criadas <span>{tasks.length}</span>
        </div>

        <div className={styles.completedTasks}>
          Concluídas <span>{tasks.length > 0 ? `${completedTasks} de ${tasks.length}` : 0}</span>
        </div>
      </div>

      {tasks.length > 0 && (
        <div>
          {tasks.map(task => (
            <Task 
              key={task.id} 
              task={task}
              onDeleteTask={onDeleteTask}
              onCompleteTask={onCompleteTask}
            />
          ))}
        </div>
      ) || (
        <div className={styles.noTasksFound}>
          <img src={Clipboard} alt="Prancheta"/>
          <div>
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      )}
    </div>
  );
}