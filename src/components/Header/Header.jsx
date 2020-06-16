import React from 'react';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__controls container">

        <button className="header__button header__button--menu">
          <FiMenu />
        </button>

        <div className="header__logo">
          <h1 className="header__logo__title">
            Merlin's <span className="header__logo__title header__logo__title--normal">
              Potions
            </span>
          </h1>
          <h2 className="header__logo__subtitle">fine potions since 1026</h2>
        </div>

        <button className="header__button header__button--cart">
          <FiShoppingCart />
          <span className="header__cart-counter">0</span>
        </button>

      </div>

      <div className="header__off">
        <p className="header__off-description">
          Free shipping on orders over $50
        </p>
      </div>
    </header>
  );
}

export default Header;