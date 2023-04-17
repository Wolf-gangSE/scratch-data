import { Box, Button, Typography } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';

function DataClassProject({ handleCloseStudio, studio }) {
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
        height: '50%',
      }}
    >
      <Button
        sx={{ color: '#000', backgroundColor: '#FCFCFC' }}
        onClick={() => handleCloseStudio()}
      >
        fechar
      </Button>
      <Box
        sx={{
          backgroundColor: '#FFF',
          height: '200px',
          borderRadius: '10px',
        }}
        component="img"
        src={studio.image && studio.image}
      />
      <Typography variant="h5">
        {studio.title && studio.title.length > 50
          ? `${studio.title.slice(0, 50).replace(/#/g, ' #')}...`
          : studio.title.replace(/#/g, ' #')}
      </Typography>
      {/* <Typography variant="body2">
        <strong>Autor:</strong>
        {studio.author && ` ${studio.author}`}
      </Typography> */}
      <Typography variant="body2">
        <strong>Quantidade de Projetos:</strong>
        {studio.projects_count && ` ${studio.projects_count}`}
      </Typography>
      <Box
        sx={{
          backgroundColor: '#FFF',
          padding: '6px',
        }}
      >
        <Typography variant="body2">
          <strong>Descrição: </strong>
          {studio.description && studio.description.length > 100
            ? `${studio.description.slice(0, 100).replace(/#/g, ' #')}...`
            : studio.description.replace(/#/g, ' #')}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
        }}
      >
        <Typography variant="body2">
          <strong>Criado:</strong>
          {` ${studio.created_at && format(new Date(studio.created_at), 'dd/MM/yyyy')}`}
        </Typography>
        <Typography variant="body2">
          <strong>Modificado:</strong>
          {` ${studio.modified_at && format(new Date(studio.modified_at), 'dd/MM/yyyy')}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default DataClassProject;
