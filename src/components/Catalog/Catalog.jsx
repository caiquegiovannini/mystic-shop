import React from 'react';

import './Catalog.css';

import Product from '../Product/Product';

const Catalog = ({ title, products }) => {
  return (
    <main className="catalog container">
      <h2 className="catalog__title">{title}</h2>

      <section className="catalog__cards">
        {products && products.map(product => (<Product product={product}/>))}
      </section>
    </main>
  );
}

export default Catalog;