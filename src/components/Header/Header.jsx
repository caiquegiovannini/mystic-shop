import React, { useState } from 'react';
import { FiMenu, FiShoppingCart } from 'react-icons/fi';

import './Header.css';

import Menu from '../Menu/Menu';
import Search from '../Search/Search';

const Header = ({ cartQuantity }) => {
  const [menu, setMenu] = useState(false);
  const [off, setOff] = useState({
    name: 'Free shipping', 
    condition: 'on orders over $50',
  });

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

        <div className="header__logo">
          <h1 className="header__logo__title">
            Merlin's <span className="header__logo__title header__logo__title--normal">
              Potions
            </span>
          </h1>
          <h2 className="header__logo__subtitle">fine potions since 1026</h2>
        </div>

        <div className="search-field">
          <Search />
        </div>

        
        <div className="header__cart">
          <div className="header__off header__off--desktop">
            <p className="off__description">
              {off.name}
              <span className="off__condition">
                {off.condition}
              </span>
            </p>
          </div>

          <button className="header__button header__button--cart">
            <FiShoppingCart />
            <span className="header__cart-counter">{cartQuantity}</span>
          </button>
        </div>

      </div>

      <div className="header__off header__off--mobile">
        <p className="off__description">
          {`${off.name} ${off.condition}`}
        </p>
      </div>
    
      <Menu close={handleMenu} active={menu ? 'active' : ''}/>
    </header>
  );
}

export default Header;