import React from 'react';
import { urlImage } from '../../services/api';

import './Product.css';

const Product = ({ product }) => {
  const image = {
    backgroundImage: `url(${urlImage}${product.image})`,
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