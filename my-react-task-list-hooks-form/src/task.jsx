import React, { useState } from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

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
          {task.description && <p><strong>Descripción:</strong> {task.description}</p>}
          <button onClick={handleEditClick}>Editar</button>
          <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </>
      )}
    </div>
  );
};

export default Task;
