import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiX } from 'react-icons/fi';
import { closeLightbox } from '../../actions/lightbox';
import { addItem } from '../../actions/cart';

import './Lightbox.css';

const Lightbox = () => {
  const dispatch = useDispatch();
  const { lightboxProduct } = useSelector(state => state.lightbox);

  const handleCloseLightbox = () => {
    dispatch(closeLightbox());
  }

  const handleAddToCart = product => {
    dispatch(addItem(product));
    handleCloseLightbox();
  }

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
        <figure className="lightbox__image" style={lightboxProduct.bgImage}/>
      
        <div className="lightbox__info">
          <h2 className="info__name">{lightboxProduct.name}</h2>

          <div className="info__field">
            <label className="info__subtitle">Use/Effect</label>
            <p className="info__description">{lightboxProduct.effect}</p>
          </div>

          <div className="info__separation">
            <div className="info__field">
              <label className="info__subtitle">Ingredients</label>
              {ingredientsList(lightboxProduct.ingredients)}
            </div>

            <div className="info__field">
              <label className="info__subtitle">Price</label>
              <p className="info__description info__description--price">{`$${lightboxProduct.price}`}</p>
            </div>
          </div>

            <button 
              className="lightbox__button"
              onClick={() => handleAddToCart(lightboxProduct)}
            >
              Add to cart
            </button>
        </div>
      
        <button 
          className="lightbox__close"
          onClick={() => handleCloseLightbox()}
        >
          <FiX />
        </button>
      </div>
    </div>
  );
}

export default Lightbox;