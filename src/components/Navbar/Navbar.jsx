import React from 'react';

import { images } from '../../constants';
import './navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='navbar__links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <li key={`link-${item}`} className='app__flex p-text'>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
