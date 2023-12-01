import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/react';

const Menu = () => {
  return (
    <Box bg="teal" p={4}>
      <Flex align="center">
        <Link as={RouterLink} to="/" color="white" mr={5}>
          <Text fontSize="xl" fontWeight="bold">
            Tareas App
          </Text>
        </Link>

        <Spacer />

        <Link as={RouterLink} to="/tareas" color="white" mr={5}>
          Tareas
        </Link>

        <Link as={RouterLink} to="/sobre-nosotros" color="white">
          Sobre Nosotros
        </Link>
      </Flex>
    </Box>
  );
};

export default Menu;