import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import { Helmet } from 'react-helmet';

import {
  ChangeableText,
  ProjectCard,
  Heading,
  Paragraph,
  Spacing,
} from 'components';

import { Grid } from 'restyled';

import ImgYevhen from './Yevhen.svg';
import ImgBuddy from './buddy-logo.png';
import ImgPublBox from './publbox-logo.png';

const Yevhen = () => (
  <Grid>
    <Helmet>
      <title>
        Yevhen, Front-End developer
      </title>
    </Helmet>

    <Grid.Row data-aos="zoom-out-right" data-aos-offset="0">
      <Grid.Col>
        <Image src={ImgYevhen} alt="yevhen-as-lego" responsive />
      </Grid.Col>
    </Grid.Row>

    <Spacing height={48} hiddenAt="mobile" />

    <Grid.Row data-aos="fade-in" data-aos-duration="1500" data-aos-offset="0">
      <Grid.Col xs={12} sm={6}>
        <Heading size={3} typeface="bold">
          Yevhen, Front-End developer
        </Heading>
        <Spacing height={48} hiddenAt="mobile" />
        <Paragraph>
          <span role="img" aria-label="wave">👋</span>
          Hi there.
          <br />
          I’m Professional JavaScript Developer, let’s build the next great
          service together (=
        </Paragraph>
        <Spacing height={24} />
        <Paragraph>
          <span role="img" aria-label="rocket">🚀</span>
          Achievements:
          - 1 open source project created
          - 3+ years working with React library
          - 4+ years of web development
          - 9 launched web apps for 500k+ customers
          - 1000+ contributions at private Git projects during 2018
        </Paragraph>
        <Spacing height={24} />
        <Paragraph>
          <span role="img" aria-label="developer">👨‍💻</span>
          My work motto when I’m starting a new project:
          - minimize the time for familiarization with the project and fully
          understand the client needs;
          - create such an architecture and divide Components on such a way, so
          most of App code will be reusable and easily scalable in future;
        </Paragraph>
        <Spacing height={24} />
        <Paragraph>
          <span role="img" aria-label="beer">🍻</span>
          Looking forward to work with you!
        </Paragraph>
        <Spacing height={64} />
        <Heading color="yellow" size={4} inline>
          <a href="https://www.linkedin.com/in/yuzhva/" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          <Spacing width={24} />
          <a href="https://github.com/YUzhva/" target="_blank" rel="noopener noreferrer">
            github
          </a>
          <Spacing width={24} />
          <a href="https://www.upwork.com/freelancers/~01c985f324d94452f7/" target="_blank" rel="noopener noreferrer">
            upwork
          </a>
          <Spacing width={24} />
          <a href="https://join.skype.com/invite/ntkyJzp3pREW/" target="_blank" rel="noopener noreferrer">
            skype
          </a>
        </Heading>
      </Grid.Col>

      <Grid.Col xs={12} sm={4} smOffset={2}>
        <Heading size={4} typeface="bold">
          <ChangeableText variants={['expert', 'guru', 'ninja']} /> at:
        </Heading>
        <Spacing height={48} hiddenAt="mobile" />
        <Paragraph>
          ES6
          <br />
          React + Redux
          <br />
          SPA, PWA
          <br />
          GraphQL, WebSockets
          <br />
          jest, enzyme
        </Paragraph>
      </Grid.Col>
    </Grid.Row>

    <Spacing height={48} hiddenAt="mobile" />

    <Grid.Row colEqualHeight data-aos="fade-up">
      <Grid.Col xs={12} sm={4}>
        <ProjectCard href="https://buddy.com/">
          <Image src={ImgBuddy} alt="buddy-logo" responsive />
          <Spacing height={64} />
          <Heading size={4} fontface="bold" center>
            buddy.com
          </Heading>
          <Spacing height={12} />
          <Paragraph center>
            Working with analytics for IoT data.
          </Paragraph>
          <Spacing height={24} />
        </ProjectCard>
      </Grid.Col>
      <Grid.Col xs={12} sm={4}>
        <ProjectCard href="https://publbox.com/">
          <Image src={ImgPublBox} alt="publbox-logo" responsive />
          <Spacing height={64} />
          <Heading size={4} fontface="bold" center>
            publbox.com
          </Heading>
          <Spacing height={12} />
          <Paragraph center>
            UI library.
            <br />
            Optimization of app loading time.
          </Paragraph>
          <Spacing height={24} />
        </ProjectCard>
      </Grid.Col>
      <Grid.Col xs={12} sm={4}>
        <ProjectCard active>
          <Heading size={3} color="yellow" center>
            Your next big project (=
          </Heading>
        </ProjectCard>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export default Yevhen;
