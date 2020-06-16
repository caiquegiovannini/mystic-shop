import React from 'react';
import { FiSearch } from 'react-icons/fi';

import './Search.css';

const Search = () => {
  return (
    <div className="search">
      <button className="header__button header__button--search">
        <FiSearch />
      </button>
      <input
        type="text"
        className="search__input"
        placeholder="Search our stock"
      />
    </div>
  );
}

export default Search;