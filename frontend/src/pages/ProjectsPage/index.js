import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import styles from './ProjectsPage.module.css'

const ProjectsPage = () => {
  const { setTabVisualization } = useContext(GlobalContext);

  useEffect(()=>{
    setTabVisualization('/')
  },[])

  return (
    <div className={styles.containerProjectsPage}>
      <div className={styles.contentProjectsPage}>
        <h3>Projects</h3>
      </div>
    </div>
  );
};

export default ProjectsPage;