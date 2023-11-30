// Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { ContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, dispatch } = ContextGlobal();

  const handleThemeChange = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', payload: newTheme });
  };

  const themeClass = state.theme === 'dark' ? 'dark' : 'light';

  return (
    <header>
      <div>
        <h1>
          <NavLink to='/' end>
            🚀🐼🦷 Rocket Panda Dentistry 🦝🐼🦷
          </NavLink>
        </h1>
        <nav className={themeClass}>
          <div>
            <ul className='nav'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
              <li>
                <Link to='/favs'>Favorites</Link>
              </li>
            </ul>
            <div class="nav-right">
             <button className='theme-switch' onClick={handleThemeChange}>Change theme</button>
            </div>
          </div>
        </nav>
      </div>
    </header>    
  );
};

export default Navbar;
