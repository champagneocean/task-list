import React from 'react';

const Task = ({ task }) => {
  return (
    <div>
      <span>{task.descripcion}</span>
      <input type="checkbox" checked={task.completada} readOnly />
    </div>
  );
};

export default Task;