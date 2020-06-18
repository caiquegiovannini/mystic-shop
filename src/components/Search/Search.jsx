import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';
import { searchProducts } from '../../actions/products';

import './Search.css';

const Search = () => {
  const dispatch = useDispatch();
  const { searchInput } = useSelector(state => state.products);

  const handleSearch = event => {
    dispatch(searchProducts(event.target.value));
  }

  return (
    <div className="search">
      <button className="header__button header__button--search">
        <FiSearch />
      </button>
      <input
        type="text"
        className="search__input"
        placeholder="Search our stock"
        value={searchInput}
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;