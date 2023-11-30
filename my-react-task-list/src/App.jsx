import React from 'react';
import Header from './header';
import TaskList from './TakList';

const tasks = [
  { indicador: 1, descripcion: 'Hacer la compra', completada: false },
  { indicador: 2, descripcion: 'Estudiar para el examen', completada: true },
  // Otras tareas...
];

const App = () => {
  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
