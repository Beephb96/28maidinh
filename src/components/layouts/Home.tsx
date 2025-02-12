import React from 'react';
import Header from './Header';
import Banner from './Header/Banner';
import Test from '../../Test';
import TestRedux from '../../TestRedux';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header key="header" />
      <Banner />
      <Test />
      <TestRedux />
      <Footer />
    </>
  );
};

export default Home;
