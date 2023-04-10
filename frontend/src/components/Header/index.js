import React from 'react';
import styles from './Header.module.css'
import Logo from '../../assets/logo.png'
import Menu from '../Menu';
import { Link } from 'react-router-dom';

const Header = () => {
 
  return (
    <header >
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
        <Link to='/'>
          <img width='150px' src={Logo} alt="Logo" />
        </Link>
          <Menu/>
        </div>
      </div>
    </header>
  )
}

export default Header;