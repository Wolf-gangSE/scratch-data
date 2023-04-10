import { Box } from '@mui/material';
import React from 'react';
import AnalyzeProjectBlocks from '../AnalyzeProjectBlocks';
import DataProject from '../DataProject';

function ProjectView() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem',
      }}
    >
      <DataProject />
      <AnalyzeProjectBlocks />
    </Box>
  );
}

export default ProjectView;
