import { Box, Container } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import SearchLink from '../../components/SearchLink';
import ProjectClassView from '../../components/ProjectClassView';
import Loading from '../../components/Loading';

function ProjectsClassProjects() {
  const { setTabVisualization, isLoading, setIsloading } = useContext(GlobalContext);

  useEffect(() => {
    setTabVisualization('/ProjectsClassProjects');
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: 'calc(100vh - 64.21px)', marginTop: '16px' }}>
        <SearchLink linkLabel="Link da Turma" setLoading={setIsloading} />
        {isLoading ? <Loading/> : <ProjectClassView />}
      </Box>
    </Container>
  );
}

export default ProjectsClassProjects;
