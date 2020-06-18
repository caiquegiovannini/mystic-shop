import React from 'react';
import { useSelector } from 'react-redux';

import './Catalog.css';

import Product from '../Product/Product';
import Lightbox from '../Lightbox/Lightbox';

const Catalog = ({ title }) => {
  const { products, searchedProducts } = useSelector(state => state.products);
  const { lightboxProduct, lightbox } = useSelector(state => state.lightbox);

  return (
    <main className="catalog container">
      <h2 className="catalog__title">{title}</h2>

      <section className="catalog__cards">
        {searchedProducts.length > 0
          ? searchedProducts.map(product => (<Product key={product.id} product={product}/>))
          : products.map(product => (<Product key={product.id} product={product}/>))
        }
      </section>

      {lightbox && <Lightbox product={lightboxProduct}/>}
    </main>
  );
}

export default Catalog;