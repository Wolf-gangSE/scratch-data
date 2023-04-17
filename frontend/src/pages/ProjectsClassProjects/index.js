import { Box, Container } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import SearchLink from '../../components/SearchLink';
import ProjectClassView from '../../components/ProjectClassView';
import Loading from '../../components/Loading';

function ProjectsClassProjects() {
  const { setTabVisualization,  studio } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (studio !== 0) {
      setLoading(false);
      return;
    };
  }, [studio]);

  useEffect(() => {
    setTabVisualization('/ProjectsClassProjects');
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: 'calc(100vh - 64.21px)', marginTop: '16px' }}>
        <SearchLink linkLabel="Link da Turma" setLoading={setLoading} />
        {loading ? <Loading/> : <ProjectClassView />}
      </Box>
    </Container>
  );
}

export default ProjectsClassProjects;
