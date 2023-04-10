import React from 'react';
import { GlobalProvider } from './context/GlobalContext';
import RoutesApp from './routes';

function App() {

  return (
    <div>
      <GlobalProvider>
        <RoutesApp/>
      </GlobalProvider>
    </div>
  );
}

export default App;