import { Box, Container, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';

const ProjectsPage = () => {
  const { setTabVisualization } = useContext(GlobalContext);

  useEffect(()=>{
    setTabVisualization('/')
  },[])

  return (
    <Container>
      <Box sx={{minHeight: 'calc(100vh - 48.21px)'}}>
        <Typography variant='h5' sx={{fontWeight: 'bold'}}>ProjectsPage</Typography>
      </Box>
    </Container>
  );
};

export default ProjectsPage;