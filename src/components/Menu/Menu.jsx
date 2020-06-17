import React from 'react';
import { FiX } from 'react-icons/fi';

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
            <a className="menu__link" href="#">Potions</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">Ingredients</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">Books</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">Supplies</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">Charms</a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="#">Clearance!</a>
          </li>
        </ul>
      </nav>
    
      <footer className="menu__footer">
        <a className="footer__link" href="#">Sign In</a>
        <p> or </p>
        <a className="footer__link" href="#">Sign Up</a>
      </footer>

    </section>
  );
}

export default Menu;