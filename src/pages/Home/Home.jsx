import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';

import './Home.css';

import Header from '../../components/Header/Header';
import Catalog from '../../components/Catalog/Catalog';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => setProducts(Object.values(data.potions)));
  }, []);

  return (
    <>
      <Header />

      <Catalog title={'Potions'} products={products}/>

      <Footer />
    </>
  );
}

export default Home;