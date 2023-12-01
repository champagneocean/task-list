import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const SobreNosotros = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Sobre Nosotros</Heading>
      <Text>
        Esta aplicación fue desarrollada para ayudarte a gestionar tus tareas de manera eficiente.
        Incluye funcionalidades como agregar, editar y eliminar tareas. Está construida con React y utiliza Chakra UI para mejorar la interfaz de usuario.
      </Text>
    </Box>
  );
};

export default SobreNosotros;