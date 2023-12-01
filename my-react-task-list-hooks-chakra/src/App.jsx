import React from 'react';
import { Box, VStack, ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Tareas from './components/Tareas';
import SobreNosotros from './components/SobreNosotros';
import Home from './components/Home';
import DarkModeToggle from './components/DarkModeToggle';

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    dark: {
      50: '#f1f1f1',
      // Agrega más colores oscuros según sea necesario
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Box p={4}>
          <VStack align="start" spacing={4} width="100%" maxW="400px" mx="auto">
            <DarkModeToggle />
            <nav>
              <NavLink to="/" style={{ marginRight: '10px' }} activeClassName="active">
                Home
              </NavLink>
              <NavLink to="/tareas" style={{ marginRight: '10px' }} activeClassName="active">
                Tareas
              </NavLink>
              <NavLink to="/sobre-nosotros" activeClassName="active">
                Sobre Nosotros
              </NavLink>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tareas" element={<Tareas />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            </Routes>
          </VStack>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;