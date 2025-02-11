import React from 'react';
import Header from './Header';
import Banner from './Header/Banner';
import Test from '../../Test';
import TestRedux from '../../TestRedux';

const Home: React.FC = () => {
  return (
    [
      <Header
        key="header"
        isFirstScreen={true}  // Bạn có thể thay đổi logic cho isFirstScreen nếu cần
      />,
      <Banner />,
      <Test />,
      <TestRedux />,
    ]
  );
};

export default Home;
