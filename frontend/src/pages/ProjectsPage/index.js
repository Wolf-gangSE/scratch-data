import { Box, Container } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import Welcome from '../../components/Welcome';
import SearchLink from '../../components/SearchLink';
import ProjectView from '../../components/ProjectView';
import Loading from '../../components/Loading';

function ProjectsPage() {
  const { setTabVisualization } = useContext(GlobalContext);
  const [dataProjects, setDataProjects] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const bodyView = () => (dataProjects ? <ProjectView /> : <Welcome />);

  useEffect(() => {
    setTabVisualization('/');
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: 'calc(100vh - 64.21px)', marginTop: '16px' }}>
        <SearchLink
          linkLabel="Link do Projeto"
          setDataProjects={setDataProjects}
          handleSearch={handleSearch}
        />
        {isLoading ? <Loading /> : bodyView()}
      </Box>
    </Container>
  );
}

export default ProjectsPage;
