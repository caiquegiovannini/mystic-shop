import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link to="/" className="useful__link">Company</Link>
        <Link to="/"  className="useful__link">Contact us</Link>
        <Link to="/" className="useful__link">Shipping</Link>
        <Link to="/" className="useful__link">Returns</Link>
        <Link to="/" className="useful__link">Careers</Link>
      </section>
      
      <section className="footer__social">
        <Link to="/" className="social__link">
          <FaFacebookSquare />
        </Link>
        <Link to="/" className="social__link">
          <FaTwitterSquare />
        </Link>
        <Link to="/" className="social__link">
          <FaPinterestSquare />
        </Link>
        <Link to="/" className="social__link">
          <FaTumblrSquare />
        </Link>
        <Link to="/" className="social__link">
          <FaGooglePlusSquare />
        </Link>
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