import React from 'react';

import './Product.css';

const Product = ({ product }) => {
  const image = {
    backgroundImage: `url(https://raw.githubusercontent.com/enext-wpp/challenges/master/challenge-one/src/assets/images/products/${product.image})`,
  }

  return (
    <article className="product">
      <figure className="product__image" style={image} />
        
      <div className="product__info">
        <h3 className="product__name">{`${product.name} - `}</h3>
        <p className="product__price">{`$${product.price}`}</p>
      </div>
    </article>
  );
}

export default Product;