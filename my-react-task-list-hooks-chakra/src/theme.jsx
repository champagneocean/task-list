import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'light', // Modo de color por defecto
  useSystemColorMode: false, // No seguir el modo del sistema

  colors: {
    dark: {
      50: '#f1f1f1',
      // Agrega más colores oscuros según sea necesario
    },
  },
});

export default theme;