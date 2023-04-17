import { Box, Container } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import SearchLink from '../../components/SearchLink';
import ProjectView from '../../components/ProjectView';
import Loading from '../../components/Loading';

function ProjectsPage() {
  const { setTabVisualization, project, setProject } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const params = useLocation();

  useEffect(() => {
    if (params.state?.project) {
      setProject({project: params.state?.project});
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (project.length !== 0) {
      setLoading(false);
      return;
    };
  }, [project]);

  useEffect(() => {
    setTabVisualization('/');
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: 'calc(100vh - 64.21px)', marginTop: '16px' }}>
        <SearchLink linkLabel="Link do Projeto" setLoading={setLoading} />
        {loading ? <Loading/> : <ProjectView />}
      </Box>
    </Container>
  );
}

export default ProjectsPage;
