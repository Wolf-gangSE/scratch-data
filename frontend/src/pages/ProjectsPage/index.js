import { Box, Container} from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Welcome from '../../components/Welcome';
import SearchLink from '../../components/SearchLink';

const ProjectsPage = () => {
  const { setTabVisualization } = useContext(GlobalContext);

  useEffect(()=>{
    setTabVisualization('/')
  },[])

  return (
    <Container>
      <Box sx={{minHeight: 'calc(100vh - 64.21px)', marginTop: '16px'}}>
        <SearchLink/>
        <Welcome/>
      </Box>
    </Container>
  );
};

export default ProjectsPage;