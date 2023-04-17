import { Box, Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import useApi from '../../services/useApi';
import theme from '../../theme';

function SearchLink({ linkLabel, setLoading }) {
  const [link, setLink] = useState('');
  const { tabVisualization, setStudio, setProject } = useContext(GlobalContext);
  const { getProject, getStudio } = useApi();

  const handleSearch = async () => {
    if(link === '') {
      alert('Preencha o campo de busca!');
      return;
    };
    setStudio([]);
    setProject([]);
    setLink('');
    setLoading(true);
    if(tabVisualization === '/ProjectsClassProjects') {
      const id = link.match(/(?<=studios\/)\d+/)?.[0];
      await getStudio(id);
    } else {
      const id = link.match(/(?<=projects\/)\d+/)?.[0];
      await getProject(id);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        marginBottom: '16px',
      }}
    >
      <TextField
        sx={{
          width: '100%',
          marginRight: '16px',
        }}
        size="small"
        id="outlined-basic"
        label={linkLabel}
        variant="outlined"
        onChange={(e) => setLink(e.target.value)}
        value={link}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: `${theme.palette.colors.tertiary}`,
          '&:hover': {
            backgroundColor: `${theme.palette.colors.secondary}`,
          },
        }}
        onClick={handleSearch}
      >
        Buscar
      </Button>
    </Box>
  );
}

export default SearchLink;
