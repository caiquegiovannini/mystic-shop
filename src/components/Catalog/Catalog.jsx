import React, { useState } from 'react';

import './Catalog.css';

import Product from '../Product/Product';
import Lightbox from '../Lightbox/Lightbox';

const Catalog = ({ title, products, addToCart }) => {
  const [lightbox, setLightbox] = useState(false);
  const [productLightbox, setProductLightbox] = useState({});

  const handleClickProduct = (product, bgImage) => {
    setLightbox(true);
    setProductLightbox({
      ...product,
      bgImage,
    });
  }

  const handleAddToCart = () => {

  }

  const handleCloseLightbox = () => {
    setLightbox(false);
  }

  return (
    <main className="catalog container">
      <h2 className="catalog__title">{title}</h2>

      <section className="catalog__cards">
        {products && products.map(product => (<Product key={product.id} product={product} handleClick={handleClickProduct}/>))}
      </section>

      {lightbox && <Lightbox product={productLightbox} addToCart={addToCart} close={handleCloseLightbox}/>}
    </main>
  );
}

export default Catalog;