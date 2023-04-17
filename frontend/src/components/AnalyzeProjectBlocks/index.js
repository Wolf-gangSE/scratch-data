import { Box, Typography } from '@mui/material';
import React from 'react';
import Block from '../Block';

function AnalyzeProjectBlocks({project}) {
  const data = [
    { id: 1, label: 'Controle', value: project.n_controls },
    { id: 2, label: 'Sensores', value: project.n_sensings },
    { id: 3, label: 'Eventos', value: project.n_events },
    { id: 4, label: 'Operadores', value: project.n_operators },
    { id: 5, label: 'Movimento', value: project.n_motions },
    { id: 6, label: 'Variáveis', value: project.n_datas },
    { id: 7, label: 'Aparência', value: project.n_looks },
    { id: 8, label: 'Meus Blocos', value: project.n_pens },
    { id: 9, label: 'Som', value: project.n_sounds },
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
          Quantidade de blocos existentes no projeto [ {project.total_blocks && project.total_blocks} ] 
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {data.map((item) => (
            <Block key={item.id} label={item.label} value={item.value} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AnalyzeProjectBlocks;
