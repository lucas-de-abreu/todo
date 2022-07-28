import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './NewTask.module.css';

interface NewTaskProps {
  onCreateTask: (task: string) => void
}

export function NewTask({ onCreateTask }: NewTaskProps) {
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    onCreateTask(newTaskText);

    setNewTaskText('');
  }
  
  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }
  
  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <div className={styles.wrapper}>
      <form 
        onSubmit={handleCreateNewComment}
        className={styles.newTaskForm}
      >
        <input
          placeholder='Adicione uma nova tarefa'
          onInvalid={handleNewTaskInvalid}
          onChange={handleNewTaskChange}
          value={newTaskText}
          name='task'
          required
        />

        <button 
          disabled={isNewTaskEmpty}
          type="submit" 
        > 
          Criar
          <PlusCircle size={16} weight="bold"/>
        </button>
      </form>
    </div>
  );
}