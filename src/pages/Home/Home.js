import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from 'components/PageHeader';
import { Grid, Image, Header } from 'semantic-ui-react';

import Persons from '../../media/images/Persons.svg';
import Contribute from '../../media/images/Contribute.svg';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <PageHeader />
      <Grid container className="YO Home-page common-padding">
        <Grid.Row>
          <Grid.Column width="7" textAlign="left">
            <Header className="font-size-xx-large circular-bold Home-page__title colored-yellow" size="huge">Bonjour</Header>
            <Header className="font-size-x-large circular-bold Home-page__subtitile colored-black" size="large">
              We are YO! mates —
              <br />
              Yevhen & Olenka.
            </Header>
            <p className="circular-medium font-size-large-em colored-black">We build awesome products with a power of user-friendly Design and fast Front-end development. We also enjoy to travel and try new beer tastes.</p>
            <Link to="#" className="Home-page__button Home-page__button--with-border Home-page__button--margin-top circular-bold colored-yellow font-size-medium-em">start a project</Link>
          </Grid.Column>
          <Grid.Column width="1" />
          <Grid.Column width="7" verticalAlign="middle">
            <Image src={Persons} />
          </Grid.Column>
          <Grid.Column width="1" />
        </Grid.Row>
      </Grid>
      <Grid container padded="vertically" className="YO common-padding">
        <Grid.Row>
          <Grid.Column>
            <Header className="font-size-x-large circular-bold Home-page__subtitile colored-black" size="large">
              Services, that we provide 
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="8">
            <p className="circular-book colored-black">UX design (defining personas, user scenarios, user stories, use cases)<br />
              Wireframing<br />
              High-fidelity mockups for web<br />
              Mobile applications design<br />
              Interactive Prototypes
            </p>
          </Grid.Column>
          <Grid.Column width="8">
            <p className="circular-book colored-black">UX design (defining personas, user scenarios, user stories, use cases)<br />
              Wireframing<br />
              High-fidelity mockups for web<br />
              Mobile applications design<br />
              Interactive Prototypes
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid container padded="vertically" className="YO Home-page common-padding">
        <Grid.Row>
          <Grid.Column width="8" verticalAlign="middle">
            <Header className="font-size-x-large circular-bold Home-page__subtitile colored-black" size="large">
              Contributing to open-source 
            </Header>
            <p className="circular-book colored-black">React leaflet markercluster.</p>
            <Link to="#" className="Home-page__button Home-page__button--margin-right circular-bold colored-yellow font-size-medium-em">code</Link>
            <Link to="#" className="Home-page__button circular-bold colored-yellow font-size-medium-em">demo</Link>
          </Grid.Column>
          <Grid.Column width="8">
            <Image src={Contribute} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid container padded="vertically" className="YO Testimonials common-padding">
        <Grid.Row>
          <Grid.Column>
            <Header className="font-size-x-large circular-bold Home-page__subtitile colored-black" size="large">
              Testimonials
            </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="7">
            <Header className="Testimonials__subtitle font-size-medium circular-bold colored-black" size="medium">for Olena</Header>
            <div className="Testimonials__block">
              <p className="circular-book colored-black">Olena has great designing skills and she gets work done quickly and on time. She is also clear, respectful and communicative. Olena also has good understanding and knowledge of the iOS design guidelines.</p>
              <p className="colored-black circular-medium-italic">Upwork client, August 2018</p>
            </div>
            <div className="Testimonials__block">
              <p className="circular-book colored-black">Within a few months of working with Olena on KindGeek she handled everything from reviewing the users needs, wireframing ideas complete with all necessary styling to implementing the full UI/UX expertise for our projects. Olena is proficient on all of the latest versions of the most cutting edge design software and is always eager to learn new skills. At Kindgeek she has worked on landing pages, mobile Apps, CRM systems, illustrations and business presentations for some of our clients and few inside projects. She is able to thoroughly focus on every project and is not easily distracted. Additionally, Olena has shown a leadership qualities and good communication skills with our clients.</p>
              <p className="colored-black circular-medium-italic">Design manager @Kindgeek, May 2018</p>
            </div>
          </Grid.Column>
          <Grid.Column width="1" />
          <Grid.Column width="7">
            <Header className="Testimonials__subtitle font-size-medium circular-bold colored-black" size="medium">for Yevhen</Header>
            <div className="Testimonials__block">
              <p className="circular-book colored-black">Olena has great designing skills and she gets work done quickly and on time. She is also clear, respectful and communicative. Olena also has good understanding and knowledge of the iOS design guidelines.</p>
              <p className="colored-black circular-medium-italic">Upwork client, August 2018</p>
            </div>
            <div className="Testimonials__block">
              <p className="circular-book colored-black">Within a few months of working with Olena on KindGeek she handled everything from reviewing the users needs, wireframing ideas complete with all necessary styling to implementing the full UI/UX expertise for our projects. Olena is proficient on all of the latest versions of the most cutting edge design software and is always eager to learn new skills. At Kindgeek she has worked on landing pages, mobile Apps, CRM systems, illustrations and business presentations for some of our clients and few inside projects. She is able to thoroughly focus on every project and is not easily distracted. Additionally, Olena has shown a leadership qualities and good communication skills with our clients.</p>
              <p className="colored-black circular-medium-italic">Design manager @Kindgeek, May 2018</p>
            </div>
          </Grid.Column>
          <Grid.Column width="1" />
        </Grid.Row>
      </Grid>
      <Grid container padded="vertically" className="YO Contact common-padding">
        <Grid.Row>
          <Grid.Column width="7" verticalAlign="middle">
            <Header className="font-size-xx-large circular-bold colored-black" size="huge">Let’s colaborate together on your next project!</Header>
          </Grid.Column>
          <Grid.Column width="1" />
          <Grid.Column width="7" verticalAlign="middle">
            <Header className="font-size-large circular-bold colored-black" size="medium">Contact us:</Header>
            <p className="colored-black circular-book Contact__mail font-size-small">hello@yo-development.com</p>
          </Grid.Column>
          <Grid.Column width="1" />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Home;
