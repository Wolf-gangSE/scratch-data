import { Box, Typography } from '@mui/material';
import React from 'react';

function ListProjects() {
  return (
    <Box
      sx={{
        backgroundColor: '#F2F2F2',
        display: 'flex',
        width: '70%',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        padding: '8px',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#FFF',
          display: 'flex',
          width: '100%',
          borderRadius: '10px',
          padding: '8px',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        />
        <Typography variant="h5" color="white" sx={{ marginBottom: '8px', color: 'red' }}>
          hello
        </Typography>
      </Box>
    </Box>
  );
}

export default ListProjects;
