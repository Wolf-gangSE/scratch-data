import { Box, Container } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Welcome from '../../components/Welcome';
import SearchLink from '../../components/SearchLink';
import ProjectView from '../../components/ProjectView';

function ProjectsPage() {
  const { setTabVisualization } = useContext(GlobalContext);
  const [dataProjects, setDataProjects] = useState(false);

  useEffect(() => {
    setTabVisualization('/');
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: 'calc(100vh - 64.21px)', marginTop: '16px' }}>
        <SearchLink setDataProjects={setDataProjects} />
        {dataProjects ? <ProjectView /> : <Welcome />}
      </Box>
    </Container>
  );
}

export default ProjectsPage;
