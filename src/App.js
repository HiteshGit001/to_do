import './App.css';
import Home from './Pages/Home';
import DataContext from './context/DataContext';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <DataContext>
        <Home />
      </DataContext>
    </ChakraProvider>
  );
}

export default App;
