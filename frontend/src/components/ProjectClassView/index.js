import { Box } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import DataClassProject from '../DataClassProject';
import ListProjects from '../ListProjects';
import Welcome from '../Welcome';

function ProjectClassView() {
  const { studio, setStudio } = useContext(GlobalContext);
  const [isLoadingProject, setIsLoadingProject] = useState(false);

  useEffect(() => {
    if (studio.length === 0) return;
    setIsLoadingProject(true);
  }, [studio]);

  const handleCloseStudio = () => {
    setIsLoadingProject(false);
    setStudio([]);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '32px',
      }}
    >
      {isLoadingProject ? (
        <>
          <DataClassProject handleCloseStudio={handleCloseStudio} studio={studio.studio} />
          <ListProjects studioProjects={studio.projects} studio={studio.studio} />
        </>
      ) : (
        <Welcome />
      )}
    </Box>
  );
}

export default ProjectClassView;
