import styles from './Task.module.css';
import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';

interface Task {
  id: number,
  completed: boolean,
  description: string,
}

interface TaskProps {
  onCompleteTask: (id: number) => void,
  onDeleteTask: (id: number) => void,
  task: Task,
}

export function Task({ task, onDeleteTask, onCompleteTask }: TaskProps) {
  function handleCompleteTask() {
    onCompleteTask(task.id);
  }

  function handleDeleteTask() {
    onDeleteTask(task.id);
  }

  const isCompleted = task.completed;

  return (
    <div className={styles.wrapper}>
      <span
        className={isCompleted ? styles.checked : styles.notChecked}
        onClick={handleCompleteTask}
      >
        {isCompleted && (<Check />)}
      </span>
      <p className={styles.description}>
        {task.completed ? (<s>{task.description}</s>) : task.description}
      </p>
      <button title='Deletar task'>
        <Trash onClick={handleDeleteTask} size={14}/>
      </button>
    </div>
  );
}