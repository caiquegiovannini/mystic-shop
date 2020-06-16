import React from 'react';
import { FiX, FiSearch } from 'react-icons/fi';

import './Menu.css';

const Menu = ({ close }) => {
  return (
    <section className="menu">
      
      <header className="menu__header container">
        <button 
          className="header__button"
          onClick={close}
        >
          <FiX />
        </button>

        <div className="menu__search">
          <button className="header__button header__button--search">
            <FiSearch />
          </button>
          <input 
            type="text"
            className="menu__search-input"
            placeholder="Search our stock"
          />
        </div>
      </header>

      <nav className="menu__categories">
        <ul>
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