import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import styles from './Menu.module.css';

function Menu() {
  const { tabVisualization } = useContext(GlobalContext);

  return (
    <Box component="nav" className={styles.menu}>
      <li><Link className={tabVisualization === '/' ? styles.menuActive : undefined} to="/">Projetos</Link></li>
      <li><Link className={tabVisualization === '/DataBasePage' ? styles.menuActive : undefined} to="/DataBasePage">Base de Dados</Link></li>
    </Box>
  );
}

export default Menu;
