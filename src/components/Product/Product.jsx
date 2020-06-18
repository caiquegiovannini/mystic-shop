import React from 'react';
import { useDispatch } from 'react-redux';
import { urlImage } from '../../services/api';
import { selectProduct } from '../../actions/lightbox';

import './Product.css';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const bgImage = {
    backgroundImage: `url(${urlImage}${product.image})`,
  }

  const handleSelectProduct = (product, bgImage) => {
    const newProduct = {
      ...product,
      bgImage,
    }

    dispatch(selectProduct(newProduct));
  }

  return (
    <article className="product" onClick={() => handleSelectProduct(product, bgImage)}>
      <figure className="product__image" style={bgImage} />
        
      <div className="product__info">
        <h3 className="product__name">{`${product.name} - `}</h3>
        <p className="product__price">{`$${product.price}`}</p>
      </div>
    </article>
  );
}

export default Product;