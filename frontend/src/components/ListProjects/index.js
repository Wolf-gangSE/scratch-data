import { Box, Pagination } from '@mui/material';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
// import { GlobalContext } from '../../context/GlobalContext';
import useApi from '../../services/useApi';
import ClassProject from '../ClassProject';
import Loading from '../Loading';

function ListProjects({ studioProjects, studio }) {
  const { isLoading, setIsLoading } = useContext(GlobalContext);
  const { getStudio } = useApi();
  const [page, setPage] = useState(1);

  const handlePaginationChange = (event, value) => {
    setIsLoading(true)
    setPage(value);
    const studioOffset = value * 10 - 10;
    console.log(studioOffset);
    getStudio(studio.id, studioOffset);
    console.log(studio);
    console.log(studioProjects);
    setIsLoading(false)
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
        {isLoading ? (
          <Loading />
        ) : (
          studioProjects.map((project) => <ClassProject key={project.id} project={project} />)
        )}
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
            count={Math.ceil(studio.projects_count / 10)}
            page={page}
            onChange={handlePaginationChange}
          />
        )}
      </Box>
    </Box>
  );
}

export default ListProjects;
