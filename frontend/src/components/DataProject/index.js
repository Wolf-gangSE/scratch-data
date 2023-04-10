import { Box, Typography } from '@mui/material';
import React from 'react';

function DataProject() {
  return (
    <Box
      sx={{
        backgroundColor: '#F2F2F2',
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        padding: '16px',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        gap: '0.5rem',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#FFF',
          height: '200px',
          borderRadius: '10px',
        }}
      >
        imagem aqui
      </Box>
      <Typography variant="h5">Titulo</Typography>
      <Typography variant="body2">Criador do projeto</Typography>
      <Box
        sx={{
          backgroundColor: '#FFF',
          padding: '6px',
        }}
      >
        <Typography variant="body2">Descrição: </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: '#FFF',
          padding: '6px',
        }}
      >
        <Typography variant="body2">Tags: </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: '#FFF',
          padding: '6px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="body2">Visualizacoes: {`${10}`}</Typography>
        <Typography variant="body2">Curtidas: {`${10}`}</Typography>
        <Typography variant="body2">Favoritos: {`${10}`}</Typography>
        <Typography variant="body2">Comentarios: {`${10}`}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body2">criação: 00/00/0000</Typography>
        <Typography variant="body2">mod: 00/00/0000</Typography>
      </Box>
    </Box>
  );
}

export default DataProject;
