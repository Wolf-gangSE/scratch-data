import { Box, Typography } from '@mui/material';
import React from 'react';
import Block from '../Block';

function AnalyzeProjectBlocks() {
  const data = [
    { id: 1, label: 'Controle', icon: 'icon...', value: 10 },
    { id: 2, label: 'Sensores', icon: 'icon...', value: 9 },
    { id: 3, label: 'Eventos', icon: 'icon...', value: 8 },
    { id: 4, label: 'Operadores', icon: 'icon...', value: 0 },
    { id: 5, label: 'Movimento', icon: 'icon...', value: 18 },
    { id: 6, label: 'Variáveis', icon: 'icon...', value: 14 },
    { id: 7, label: 'Aparência', icon: 'icon...', value: 4 },
    { id: 8, label: 'Meus Blocos', icon: 'icon...', value: 5 },
    { id: 9, label: 'Som', icon: 'icon...', value: 66 },
  ];
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
          backgroundColor: '#4D97FF',
          display: 'flex',
          width: '100%',
          borderRadius: '10px',
          padding: '8px',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h5" color="white" sx={{ marginBottom: '8px' }}>
          Analise de Blocos
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {data.map((item) => (
            <Block key={item.id} label={item.label} icon={item.icon} value={item.value} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AnalyzeProjectBlocks;
