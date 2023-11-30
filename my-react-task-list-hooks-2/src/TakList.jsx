import React, { useState } from 'react';
import Task from './Task';
import useTaskManager from './hooks/useTaskManager';

const TaskList = () => {
  const { tasks, addTask, deleteTask, editTask } = useTaskManager();
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      addTask(newTaskTitle, newTaskDescription);
      setNewTaskTitle('');
      setNewTaskDescription('');
    }
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
      </div>

      {/* Lista de tareas existentes */}
      {tasks.map((task) => (
        <div key={task.id}>
          <Task task={task} />
          <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
          <button
            onClick={() => {
              const newTitle = prompt('Nuevo título:', task.title);
              const newDescription = prompt('Nueva descripción:', task.description);
              if (newTitle !== null && newDescription !== null) {
                editTask(task.id, newTitle, newDescription);
              }
            }}
          >
            Editar tarea
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;