import React from 'react';
import { FiX } from 'react-icons/fi';

import './Lightbox.css';

const Lightbox = ({ product, addToCart, close }) => {
  const ingredientsList = ingredients => {
    return (
      <ul className="info__description">
        {ingredients.map(ingredient => (
          <li key={ingredient} className="info__ingredient">
            {ingredient}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="lightbox">
      <div className="lightbox__content">
        <figure className="lightbox__image" style={product.bgImage}/>
      
        <div className="lightbox__info">
          <h2 className="info__name">{product.name}</h2>

          <div className="info__field">
            <label className="info__subtitle">Use/Effect</label>
            <p className="info__description">{product.effect}</p>
          </div>

          <div className="info__separation">
            <div className="info__field">
              <label className="info__subtitle">Ingredients</label>
              {ingredientsList(product.ingredients)}
            </div>

            <div className="info__field">
              <label className="info__subtitle">Price</label>
              <p className="info__description info__description--price">{`$${product.price}`}</p>
            </div>
          </div>

            <button 
              className="lightbox__button"
              onClick={addToCart}
            >
              Add to cart
            </button>
        </div>
      
        <button 
          className="lightbox__close"
          onClick={() => close()}
        >
          <FiX />
        </button>
      </div>
    </div>
  );
}

export default Lightbox;