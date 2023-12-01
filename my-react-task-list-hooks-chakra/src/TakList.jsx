import React, { useState } from 'react';
import Task from './Task';
import useTaskManager from './hooks/useTaskManager';

const TaskList = () => {
  const { tasks, addTask, deleteTask, editTask } = useTaskManager();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim().length < 3) {
      setError('El nombre de la tarea debe tener al menos 3 caracteres.');
      return;
    }

    addTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle('');
    setNewTaskDescription('');
    setError('');
  };

  return (
    <div>
      {/* Formulario para agregar nueva tarea */}
      <div>
        <label>
          Título:
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
        </label>
        <button onClick={handleAddTask}>Agregar tarea</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

      {/* Lista de tareas existentes */}
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={deleteTask} onEdit={editTask} />
      ))}
    </div>
  );
};

export default TaskList;