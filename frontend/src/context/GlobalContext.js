import React, { createContext, useMemo, useState } from 'react';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [tabVisualization, setTabVisualization] = useState('/');
  const [isLoading, setIsLoading] = useState(false)
  const [project, setProject] = useState([]);
  const [studio, setStudio] = useState([]);

  const contextValue = useMemo(
    () => ({
      tabVisualization,
      setTabVisualization,
      project,
      setProject,
      studio,
      setStudio,
      isLoading, 
      setIsLoading
    }),
    [tabVisualization, project, studio]
  );

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };
