// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, dispatch } = ContextGlobal();

  const handleThemeChange = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <nav className={themeClass}>
      <div className='navegador'>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/contact'>Contacto</Link>
          </li>
          <li>
            <Link to='/favs'>Favoritos</Link>
          </li>
        </ul>
      </div>
      <button onClick={handleThemeChange}>Cambiar Tema</button>
    </nav>
  );
};

export default Navbar;
