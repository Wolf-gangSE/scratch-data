import { Box } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import AnalyzeProjectBlocks from '../AnalyzeProjectBlocks';
import DataProject from '../DataProject';
import Welcome from '../Welcome';

function ProjectView() {
  const { project, setProject } = useContext(GlobalContext);
  const [isLoadingProject, setIsLoadingProject] = useState(false);

  useEffect(() => {
    if (project.length === 0) return;
    setIsLoadingProject(true);
  }, [project]);

  const handleCloseProject = () => {
    setIsLoadingProject(false);
    setProject([]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      {isLoadingProject ? (
        <>
          <DataProject handleCloseProject={handleCloseProject} project={project.project} />
          <AnalyzeProjectBlocks project={project.project} />
        </>
      ) : (
        <Welcome />
      )}
    </Box>
  );
}

export default ProjectView;
