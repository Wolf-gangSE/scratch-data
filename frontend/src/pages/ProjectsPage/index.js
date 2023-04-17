import { Box, Container } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import SearchLink from '../../components/SearchLink';
import ProjectView from '../../components/ProjectView';
import Loading from '../../components/Loading';

function ProjectsPage() {
  const { setTabVisualization } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  useEffect(() => {
    setTabVisualization('/');
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: 'calc(100vh - 64.21px)', marginTop: '16px' }}>
        <SearchLink linkLabel="Link do Projeto" handleSearchLoading={handleSearchLoading} />
        {isLoading ? <Loading/> : <ProjectView />}
      </Box>
    </Container>
  );
}

export default ProjectsPage;
