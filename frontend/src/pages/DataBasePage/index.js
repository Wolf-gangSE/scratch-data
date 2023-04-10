import React, { useContext, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { GlobalContext } from '../../context/GlobalContext';

function DataBasePage() {
  const { setTabVisualization } = useContext(GlobalContext);

  useEffect(() => {
    setTabVisualization('/DataBasePage');
  }, []);

  return (
    <Container>
      <Box sx={{ minHeight: 'calc(100vh - 48.21px)' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>DataBasePage</Typography>
      </Box>
    </Container>
  );
}

export default DataBasePage;
