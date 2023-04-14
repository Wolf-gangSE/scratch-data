import React, { createContext, useMemo, useState } from 'react';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [tabVisualization, setTabVisualization] = useState('/');

  const contextValue = useMemo(
    () => ({
      tabVisualization,
      setTabVisualization,
    }),
    [tabVisualization]
  );

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
}

export { GlobalContext, GlobalProvider };
