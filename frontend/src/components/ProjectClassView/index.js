import { Box } from '@mui/material';
import React from 'react';
import DataClassProject from '../DataClassProject';
import ListProjects from '../ListProjects';

function ProjectClassView() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <DataClassProject />
      <ListProjects />
    </Box>
  );
}

export default ProjectClassView;
