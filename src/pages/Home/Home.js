import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'components/Header';


class Home extends PureComponent {
  render() {
    return (
      <div className="home-page">
        <Header />
        <Link to="/example">Check example page</Link>
      </div>
    );
  }
}

export default Home;
