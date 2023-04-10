import React from 'react';
import Logo from '../../assets/logo.png'
import Menu from '../Menu';
import { Link } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { useTheme } from '@mui/material';

const Header = () => {
  const {palette} = useTheme();
 
  return (
    <Box component={'header'} >
      <Box sx={{backgroundColor: `${palette.colors.secondary}`}}>
        <Container 
         sx={{
           display: 'flex',
           justifyContent: 'space-between',
           alignItems: 'center',
           padding: '8px 0',
          }}>
          <Link to='/'>
            <Box component={'img'} width='150px' src={Logo} alt="Logo" />
          </Link>
          <Menu/>
        </Container>
      </Box>
    </Box>
  )
}

export default Header;