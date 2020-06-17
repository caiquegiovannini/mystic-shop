import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaPinterestSquare, FaTumblrSquare, FaGooglePlusSquare } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {

  return (
    <footer className="footer">

      <section className="newsletter">
        <h3 className="newsletter__title">Sign up for our Newsletter</h3>
        <p className="newsletter__description">
          Sign up for our newsletter & get exclusive discounts!
        </p>

        <div className="newsletter__submit">
          <input 
            type="text"
            className="newsletter__input"
            placeholder="Enter your email"
          />
          <button
            className="newsletter__button"
          >
            Submit  
          </button>
        </div>
      </section>
    
      <section className="footer__useful">
        <a className="useful__link" href="#">Company</a>
        <a className="useful__link" href="#">Contact us</a>
        <a className="useful__link" href="#">Shipping</a>
        <a className="useful__link" href="#">Returns</a>
        <a className="useful__link" href="#">Careers</a>
      </section>
      
      <section className="footer__social">
        <a className="social__link" href="#">
          <FaFacebookSquare />
        </a>
        <a className="social__link" href="#">
          <FaTwitterSquare />
        </a>
        <a className="social__link" href="#">
          <FaPinterestSquare />
        </a>
        <a className="social__link" href="#">
          <FaTumblrSquare />
        </a>
        <a className="social__link" href="#">
          <FaGooglePlusSquare />
        </a>
      </section>

      <section className="footer__copyright">
        <p className="copyright__text">
          © 2020 Merlin's Potions. All Rights Reserved
        </p>
      </section>

    </footer>
  );
}

export default Footer;