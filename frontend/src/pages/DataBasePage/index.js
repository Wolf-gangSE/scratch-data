import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import styles from './DataBasePage.module.css'

const DataBasePage = () => {
  const { setTabVisualization } = useContext(GlobalContext);

  useEffect(()=>{
    setTabVisualization('/DataBasePage')
  },[])

  return (
    <div className={styles.containerProjectsPage}>
      <div className={styles.contentProjectsPage}>
        <h3>DataBasePage</h3>
      </div>
    </div>
  );
};

export default DataBasePage;