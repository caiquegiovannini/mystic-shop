import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import Header from '../../components/Header/Header';
import Catalog from '../../components/Catalog/Catalog';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => setProducts(Object.values(data.potions)));
  }, []);

  const handleIncreaseCartQuantity = () => {
    setCartQuantity(cartQuantity + 1)
  }

  return (
    <>
      <Header cartQuantity={cartQuantity}/>

      <Catalog title={'Potions'} products={products} addToCart={handleIncreaseCartQuantity}/>

      <Footer />
    </>
  );
}

export default Home;