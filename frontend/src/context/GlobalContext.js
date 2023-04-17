import React, { createContext, useMemo, useState } from 'react';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [tabVisualization, setTabVisualization] = useState('/');
  const [project, setProject] = useState([]);
  const [studio, setStudio] = useState([]);

  const contextValue = useMemo(
    () => ({
      tabVisualization,
      setTabVisualization,
      project,
      setProject,
      studio,
      setStudio
    }),
    [tabVisualization, project, studio]
  );

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };
