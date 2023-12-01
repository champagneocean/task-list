import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Menu from './components/Menu';
import Home from './components/Home';
import Tareas from './components/Tareas';
import SobreNosotros from './components/SobreNosotros';

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
