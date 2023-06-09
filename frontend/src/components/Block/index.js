import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Block({ label, value, icon }) {
  return (
    <Box
      sx={{
        width: '48%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '70%',
          backgroundColor: '#FFF',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '10px 0 0 10px',
          gap: '10px',
        }}
      >
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: '10px',
        }}
        >
          <FontAwesomeIcon icon={icon} />
        </Box>
        <Typography variant="h6">{label}</Typography>
      </Box>
      <Box
        sx={{
          width: '30%',
          backgroundColor: '#F8AA36',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '0 10px 10px 0',
        }}
      >
        <Typography variant="h6">{value}</Typography>
      </Box>
    </Box>
  );
}

export default Block;
