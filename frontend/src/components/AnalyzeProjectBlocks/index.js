import { Box, Typography } from '@mui/material';
import React from 'react';
import {
  faCogs,
  faVolumeUp,
  faArrowsAlt,
  faMicrochip,
  faCalendar,
  faPlus,
  faCode,
  faPaintBrush,
  faCube,
} from '@fortawesome/free-solid-svg-icons';
import Block from '../Block';
import gato from '../../assets/animeScratch.png';

function AnalyzeProjectBlocks({ project }) {
  const data = [
    { id: 1, label: 'Controle', value: project.n_controls, icon: faCogs },
    { id: 2, label: 'Sensores', value: project.n_sensings, icon: faMicrochip },
    { id: 3, label: 'Eventos', value: project.n_events, icon: faCalendar },
    { id: 4, label: 'Operadores', value: project.n_operators, icon: faPlus },
    { id: 5, label: 'Movimento', value: project.n_motions, icon: faArrowsAlt },
    { id: 6, label: 'Variáveis', value: project.n_datas, icon: faCode },
    { id: 7, label: 'Aparência', value: project.n_looks, icon: faPaintBrush },
    { id: 8, label: 'Meus Blocos', value: project.n_pens, icon: faCube },
    { id: 9, label: 'Som', value: project.n_sounds, icon: faVolumeUp },
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
      {project.total_blocks ? (
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
            Quantidade de blocos existentes no projeto [{' '}
            {project.total_blocks && project.total_blocks} ]
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {data.map((item) => (
              <Block key={item.id} label={item.label} value={item.value} icon={item.icon} />
            ))}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: '#4D97FF',
            display: 'flex',
            width: '100%',
            borderRadius: '10px',
            padding: '8px',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box component="img" width="200px" src={gato} alt="gato" />
          <Typography
            variant="h5"
            color="white"
            sx={{
              marginBottom: '8px',
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Desculpe, nosso sistema só consegue analisar projetos a partir da versão 3.0 do Scratch.
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default AnalyzeProjectBlocks;
