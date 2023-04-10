import { Box, useTheme } from '@mui/material';
import React from 'react';
import WelcomeImg from '../../assets/Welcome.png';

const Welcome = () => {
  const {palette} = useTheme();
 
  return (
       <Box 
         sx={{
          backgroundColor: '#F1F1F1', 
          padding: '10px',
          border: '1px solid rgba(0, 0, 0, 0.25)',
          borderRadius: '10px',
          height: '80vh',
          }}>
          <Box 
           sx={{
            backgroundColor: `${palette.colors.secondary}`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '10px',
            height: '100%',
            }}>
            <Box 
             sx={{
               maxWidth: '100%',
               height: 'auto',
              }}  
              component={'img'} 
              src={WelcomeImg} 
              alt="Logo" 
             />
          </Box>
        </Box>
  )
}

export default Welcome;