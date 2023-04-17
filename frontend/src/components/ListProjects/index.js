import { Box, Pagination } from '@mui/material';
import React, { useState } from 'react';
import useApi from '../../services/useApi';
import ClassProject from '../ClassProject';

function ListProjects({ studioProjects, studio }) {
  const { getStudio } = useApi();
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    // getStudio(studio.id, value);
    console.log(getStudio);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F2F2F2',
        display: 'flex',
        width: '70%',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        padding: '8px',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {studioProjects.map((project) => (
          <ClassProject key={project.id} project={project} />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '32px',
          alignItems: 'center',
        }}
      >
        {studioProjects.length > 0 && (
          <Pagination
            count={studio.projects_count / studioProjects.length}
            page={page}
            onChange={handleChange}
          />
        )}
      </Box>
    </Box>
  );
}

export default ListProjects;
