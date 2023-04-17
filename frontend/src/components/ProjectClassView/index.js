import { Box } from '@mui/material';
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import DataClassProject from '../DataClassProject';
import ListProjects from '../ListProjects';
import Welcome from '../Welcome';

function ProjectClassView() {
  const { studio } = useContext(GlobalContext);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      {studio.length > 0 ? (
        <>
          <DataClassProject studio={studio[0]} />
          <ListProjects studio={studio[0]} />
        </>
      ) : (
        <Welcome />
      )}
    </Box>
  );
}

export default ProjectClassView;
