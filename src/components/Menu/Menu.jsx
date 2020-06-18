import React from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './Menu.css';

import Search from '../Search/Search';

const Menu = ({ close, active }) => {
  return (
    <section className={`menu ${active}`}>
      
      <header className="menu__header container">
        <button 
          className="header__button"
          onClick={close}
        >
          <FiX />
        </button>

        <Search />
      </header>

      <nav className="menu__categories">
        <ul className="menu__list">
          <li className="menu__item">
            <Link to="/" className="menu__link">Potions</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">Ingredients</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">Books</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">Supplies</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">Charms</Link>
          </li>
          <li className="menu__item">
            <Link to="/" className="menu__link">Clearance!</Link>
          </li>
        </ul>
      </nav>
    
      <footer className="menu__footer">
        <Link to="/" className="footer__link" href="#">Sign In</Link>
        <p> or </p>
        <Link to="/" className="footer__link" href="#">Sign Up</Link>
      </footer>

    </section>
  );
}

export default Menu;