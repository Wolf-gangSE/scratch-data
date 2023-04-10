import { Box } from '@mui/material';
import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import RoutesApp from './routes';

function App() {

  return (
    <Box>
      <GlobalProvider>
        <RoutesApp/>
      </GlobalProvider>
    </Box>
  );
}

export default App;