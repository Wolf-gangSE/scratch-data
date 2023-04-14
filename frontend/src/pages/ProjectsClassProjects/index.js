import { Box, Container } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import SearchLink from '../../components/SearchLink';
import ProjectClassView from '../../components/ProjectClassView';
import Loading from '../../components/Loading';
import Welcome from '../../components/Welcome';

function ProjectsClassProjects() {
  const { setTabVisualization } = useContext(GlobalContext);
  const [dataProjects, setDataProjects] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const bodyView = () => (dataProjects ? <ProjectClassView /> : <Welcome />);

  useEffect(() => {
    setTabVisualization('/ProjectsClassProjects');
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: 'calc(100vh - 64.21px)', marginTop: '16px' }}>
        <SearchLink 
        linkLabel="Link da Turma" 
        setDataProjects={setDataProjects}
        handleSearch={handleSearch}
        />
        {isLoading ? <Loading /> : bodyView()}
      </Box>
    </Container>
  );
}

export default ProjectsClassProjects;
