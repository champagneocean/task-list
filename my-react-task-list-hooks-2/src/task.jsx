import React, { useState } from 'react';

const Task = ({ task, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleSaveClick = () => {
    onEdit(task.id, newTitle, newDescription);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    // Restaura los valores originales en caso de cancelación
    setNewTitle(task.title);
    setNewDescription(task.description);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <label>
            Nuevo Título:
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </label>
          <label>
            Nueva Descripción:
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </label>
          <button onClick={handleSaveClick}>Guardar</button>
          <button onClick={handleCancelClick}>Cancelar</button>
        </>
      ) : (
        <>
          <p><strong>Título:</strong> {task.title}</p>
          <p><strong>Descripción:</strong> {task.description}</p>
        </>
      )}
    </div>
  );
};

export default Task;
