import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'components/PageHeader';
import { Grid, Image, Header } from 'semantic-ui-react';

import Persons from '../../media/images/Persons.svg';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <PageHeader />
      <Grid container className="YO Welcome-screen">
        <Grid.Row>
          <Grid.Column width="7" textAlign="left">
            <Header className="font-size-xx-large circular-bold Welcome-screen__title colored-yellow" size="huge">Bonjour</Header>
            <Header className="font-size-x-large circular-bold Welcome-screen__subtitile colored-black" size="large">
              We are YO! mates —
              <br />
              Yevhen & Olenka.
            </Header>
            <p className="circular-medium font-size-large-em colored-black">We build awesome products with a power of user-friendly Design and fast Front-end development. We also enjoy to travel and try new beer tastes.</p>
            <Link to="#" className="Welcome-screen__button circular-bold colored-yellow font-size-medium-em">start a project</Link>
          </Grid.Column>
          <Grid.Column width="1">
          </Grid.Column>
          <Grid.Column width="7" verticalAlign="middle">
            <Image src={Persons} />
          </Grid.Column>
          <Grid.Column width="1">
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
