import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'components/Header';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <Link to="/example">Check example page</Link>
    </div>
  );
};

export default Home;
