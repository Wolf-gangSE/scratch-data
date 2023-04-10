import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [tabVisualization, setTabVisualization]  = useState('welcome');
  
  return(
    <GlobalContext.Provider value={{
      tabVisualization,
      setTabVisualization
    }}>
      {children}
    </GlobalContext.Provider>
  );
}
  
  export {GlobalContext, GlobalProvider};