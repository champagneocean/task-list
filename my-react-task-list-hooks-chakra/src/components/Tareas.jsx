// src/components/Tareas.js
import React, { useState } from 'react';
import {
  Box,
  Heading,
  VStack,
  Divider,
  FormControl,
  Input,
  Button,
} from '@chakra-ui/react';
import Task from '../Task';

const Tareas = () => {
  const [tareas, setTareas] = useState([
    { id: 1, title: 'Completar la tarea 1', description: 'Descripción 1', completada: false },
    { id: 2, title: 'Terminar el proyecto', description: 'Descripción 2', completada: false },
  ]);

  const [nuevoTitulo, setNuevoTitulo] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');

  const agregarTarea = () => {
    if (nuevoTitulo.trim() !== '') {
      setTareas([...tareas, { id: Date.now(), title: nuevoTitulo, description: nuevaDescripcion, completada: false }]);
      setNuevoTitulo('');
      setNuevaDescripcion('');
    }
  };

  const editarTarea = (id, nuevoTitulo, nuevaDescripcion) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, title: nuevoTitulo, description: nuevaDescripcion } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  return (
    <Box p={4}>
      <VStack align="start" spacing={4} width="100%" maxW="400px" mx="auto">
        <Heading mb={4}>Listado de Tareas</Heading>

        {/* Agregar Tarea Formulario */}
        <FormControl>
          <Input
            placeholder="Nuevo Título"
            value={nuevoTitulo}
            onChange={(e) => setNuevoTitulo(e.target.value)}
          />
          <Input
            placeholder="Nueva Descripción"
            value={nuevaDescripcion}
            onChange={(e) => setNuevaDescripcion(e.target.value)}
          />
          <Button colorScheme="teal" size="sm" mt={2} onClick={agregarTarea}>
            Agregar Tarea
          </Button>
        </FormControl>

        <Divider />

        {/* Listado de Tareas */}
        <VStack align="start" spacing={2} w="100%">
          {tareas.map((tarea) => (
            <Task
              key={tarea.id}
              task={tarea}
              onDelete={() => eliminarTarea(tarea.id)}
              onEdit={(nuevoTitulo, nuevaDescripcion) => editarTarea(tarea.id, nuevoTitulo, nuevaDescripcion)}
            />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Tareas;