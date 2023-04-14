import { Box, Typography } from '@mui/material';
import React from 'react';

function ClassProject({item}) {
  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        width: '248px',
        borderRadius: '10px',
        padding: '8px',
      }}
      onClick={() => console.log(item)}
    >
      <Box
        sx={{
          backgroundColor: '#4D97FF',
          height: '150px',
          borderRadius: '10px',
        }}
      >
        imagem aqui
      </Box>
      <Typography variant="h5">{item.title}</Typography>
      <Typography variant="body2">{item.author}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <Box>
          icon <Typography variant="body2">{item.view}</Typography>
        </Box>
        <Box>
          icon <Typography variant="body2">{item.likes}</Typography>
        </Box>
        <Box>
          icon <Typography variant="body2">{item.stars}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ClassProject;
