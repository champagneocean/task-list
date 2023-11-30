import { useState, useEffect } from 'react';

const useTaskManager = () => {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Efecto para cargar las tareas desde localStorage al iniciar la aplicación
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []); // La dependencia vacía significa que se ejecutará solo una vez al montar el componente

  // Función para agregar una nueva tarea
  const addTask = (title, description) => {
    const newTask = {
      id: new Date().getTime(),
      title,
      description,
      completed: false,
    };

    // Actualiza el estado y guarda en localStorage
    setTasks((prevTasks) => [...prevTasks, newTask]);
    updateLocalStorage([...tasks, newTask]);
  };

  // Función para eliminar una tarea
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    // Actualiza el estado y guarda en localStorage
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  // Función para editar una tarea
  const editTask = (taskId, newTitle, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle, description: newDescription } : task
    );

    // Actualiza el estado y guarda en localStorage
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  // Función para actualizar localStorage con la lista de tareas
  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return {
    tasks,
    addTask,
    deleteTask,
    editTask,
  };
};

export default useTaskManager;