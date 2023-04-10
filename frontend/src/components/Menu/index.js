import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalContext';
import styles from './Menu.module.css'

const Menu = () => {
  const { tabVisualization } = useContext(GlobalContext);

  return (
    <nav className={styles.menu}>
      <li><Link className={tabVisualization === '/' ? styles.menuActive : undefined} to='/'>Projetos</Link></li>
      <li><Link className={tabVisualization === '/DataBasePage' ? styles.menuActive : undefined} to='/DataBasePage'>Base de Dados</Link></li>
    </nav>
  )
}
  
export default Menu;