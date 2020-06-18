import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { api } from '../../services/api';
import { getProducts } from '../../actions/products';

import Header from '../../components/Header/Header';
import Catalog from '../../components/Catalog/Catalog';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => {
        const productsArray = Object.values(data.potions);

        dispatch(getProducts(productsArray))
      });
  }, []);

  return (
    <>
      <Header/>

      <Catalog title={'Potions'} />

      <Footer />
    </>
  );
}

export default Home;