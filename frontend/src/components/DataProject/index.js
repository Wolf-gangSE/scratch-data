import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { format } from 'date-fns';

function DataProject({ handleCloseProject, project }) {
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
        onClick={() => handleCloseProject()}
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
        src={project.image && project.image}
      />

      <Typography variant="h5">
        {project.title && project.title.length > 50
          ? `${project.title.slice(0, 50).replace(/#/g, ' #')}...`
          : project.title.replace(/#/g, ' #')}
      </Typography>
      <Typography variant="body2">
        <strong>Autor:</strong>
        {project.author && ` ${project.author}`}
      </Typography>
      <Box
        sx={{
          backgroundColor: '#FFF',
          padding: '6px',
        }}
      >
        <Typography variant="body2">
          <strong>Descrição: </strong>
          {project.description && project.description.length > 100
            ? `${project.description.slice(0, 100).replace(/#/g, ' #')}...`
            : project.description.replace(/#/g, ' #')}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: '#FFF',
          padding: '6px',
        }}
      >
        <Typography variant="body2">
          <strong>Tags:</strong>
          {project.tags ? `${project.tags.slice(0, 15).map((tag) => ` #${tag}`)} ...` : '...'}
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: '#FFF',
          padding: '6px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography variant="body2">
          <strong>Visualizacoes:</strong>
          {` ${project.views && project.views}`}
        </Typography>
        <Typography variant="body2">
          <strong>Curtidas:</strong> {` ${project.loves && project.loves}`}
        </Typography>
        <Typography variant="body2">
          <strong>Favoritos:</strong>
          {` ${project.favorites && project.favorites}`}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="body2">
          <strong>Criado:</strong>
          {` ${project.created_at && format(new Date(project.created_at), 'dd/MM/yyyy')}`}
        </Typography>
        <Typography variant="body2">
          <strong>Modificado:</strong>
          {` ${project.modified_at && format(new Date(project.modified_at), 'dd/MM/yyyy')}`}
        </Typography>
      </Box>
    </Box>
  );
}

export default DataProject;
