import {
  Box, Button, TextField,
} from '@mui/material';
import React from 'react';
import theme from '../../theme';

function SearchLink() {
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
        label="Link..."
        variant="outlined"
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: `${theme.palette.colors.tertiary}`,
          '&:hover': {
            backgroundColor: `${theme.palette.colors.secondary}`,
          },
        }}
        onClick={() => { console.log('click'); }}
      >
        Buscar
      </Button>
    </Box>
  );
}

export default SearchLink;
