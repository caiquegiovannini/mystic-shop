import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

import './Header.css';

import Menu from '../Menu/Menu';
import Search from '../Search/Search';

const Header = () => {
  const { items } = useSelector(state => state.cart);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  return (
    <header className="header">
      <div className="header__controls container">

        <button
          className="header__button header__button--menu"
          onClick={handleMenu}
        >
          <FiMenu />
        </button>

        <Link to="/" className="header__logo">
          <h1 className="header__logo__title">
            Merlin's <span className="header__logo__title header__logo__title--normal">
              Potions
            </span>
          </h1>
          <h2 className="header__logo__subtitle">fine potions since 1026</h2>
        </Link>

        <div className="search-field">
          <Search />
        </div>

        
        <div className="header__cart">
          <div className="header__off header__off--desktop">
            <p className="off__description">
              Free shipping
              <span className="off__condition">
                on orders over $50
              </span>
            </p>
          </div>

          <button className="header__button header__button--cart">
            <FiShoppingCart />
            <span className="header__cart-counter">{items.length}</span>
          </button>
        </div>

      </div>

      <div className="header__off header__off--mobile">
        <p className="off__description">
          Free shipping on orders over $50
        </p>
      </div>
    
      <Menu close={handleMenu} active={menu ? 'active' : ''}/>
    </header>
  );
}

export default Header;