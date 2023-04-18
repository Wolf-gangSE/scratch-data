import { Box, Container } from '@mui/material';
import React, { useContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import SearchLink from '../../components/SearchLink';
import ProjectView from '../../components/ProjectView';
import Loading from '../../components/Loading';

function ProjectsPage() {
  const { setTabVisualization, setProject, isLoading} = useContext(GlobalContext);
  const params = useLocation();

  useEffect(() => {
    const paramsProject = params.state?.project
    if (paramsProject) {
      console.log(paramsProject)
      setProject({project: paramsProject});      
    }
  }, []);

  useEffect(() => {
    setTabVisualization('/');
  }, []);
  

  return (
    <Container>
      <Box sx={{ minHeight: 'calc(100vh - 64.21px)', marginTop: '16px' }}>
        <SearchLink linkLabel="Link do Projeto" />
        {isLoading ? <Loading/> : <ProjectView />}
      </Box>
    </Container>
  );
}

export default ProjectsPage;
