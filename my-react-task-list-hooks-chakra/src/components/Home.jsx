import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Home = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Bienvenido a Mi Aplicación de Tareas</Heading>
      <Text>
        Esta es una aplicación para gestionar tus tareas de manera eficiente.
        Utiliza las funcionalidades de agregar, editar y eliminar tareas.
      </Text>
    </Box>
  );
};

export default Home;