import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import { Helmet } from 'react-helmet';

import {
  ChangeableText,
  List,
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
        Yevhen Uzhva, Front-End developer
      </title>

      <meta name="description" content="Expert front-end developer, using ES6, React + Redux in most of the projects for SPA and PWA web applications development. Top-Rated Freelancer." />
      <meta name="keywords" content="yevhen, uzhva, react, front-end, developer, top rated, upwork, best, freelancer, to hire, 2019, agency" />

      <meta property="og:image" content={ImgYevhen} />
    </Helmet>

    <Grid.Row data-aos="zoom-out-right" data-aos-offset="0">
      <Grid.Col>
        <Image className="mobile-only--center" src={ImgYevhen} alt="yevhen-as-lego" responsive />
      </Grid.Col>
    </Grid.Row>

    <Spacing height={48} hiddenAt="mobile" />

    <Grid.Row colMobileSpaced="sm" data-aos="fade-in" data-aos-duration="1500" data-aos-offset="0">
      <Grid.Col xs={12} sm={6}>
        <Heading className="mobile-only--center" size={3} typeface="bold">
          Yevhen Uzhva, Front-End developer
        </Heading>
        <Spacing height={48} />
        <Paragraph>
          <span role="img" aria-label="wave">👋</span>
          Hi there - thank you for being interested in my profile (=
        </Paragraph>

        <Spacing height={24} />

        <List>
          <List.Item>
            <span role="img" aria-label="rocket">🚀</span>
            Achievements:
          </List.Item>
          <List.Item>
            - 1 open source project created
          </List.Item>
          <List.Item>
            - 3+ years working with React library
          </List.Item>
          <List.Item>
            - 4+ years of web development
          </List.Item>
          <List.Item>
            - 9 launched web apps for 500k+ customers
          </List.Item>
          <List.Item>
            - 1000+ contributions at private Git projects during 2018
          </List.Item>
        </List>

        <Spacing height={24} />

        <List>
          <List.Item>
            <span role="img" aria-label="developer">👨‍💻</span>
            My work motto when I&apos;m starting a new project:
          </List.Item>
          <List.Item>
            - minimize the time of project familiarization and fully understand
            the client needs;
          </List.Item>
          <List.Item>
            - create such an architecture and divide Components on such a way, so
            most of App code will be reusable and easily scalable in future;
          </List.Item>
        </List>
        <Spacing height={24} />
        <Paragraph>
          <span role="img" aria-label="beer">🍻</span>
          Looking forward to working with you!
        </Paragraph>

        <Spacing height={64} hiddenAt="mobile" />

        <Grid.Row colMobileSpaced="md">
          <Grid.Col xs={6} sm={3} md={3} lg={2}>
            <Heading color="yellow" size={4} center>
              <a
                href="https://www.linkedin.com/in/yuzhva/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                linkedin
              </a>
            </Heading>
          </Grid.Col>
          <Grid.Col xs={6} sm={3} md={3} lg={2}>
            <Heading color="yellow" size={4} center>
              <a
                href="https://github.com/YUzhva/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                github
              </a>
            </Heading>
          </Grid.Col>
          <Grid.Col xs={6} sm={3} md={3} lg={2}>
            <Heading color="yellow" size={4} center>
              <a
                href="https://www.upwork.com/freelancers/~01c985f324d94452f7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UpWork"
              >
                upwork
              </a>
            </Heading>
          </Grid.Col>
          <Grid.Col xs={6} sm={3} md={3} lg={2}>
            <Heading color="yellow" size={4} center>
              <a
                href="https://join.skype.com/invite/ntkyJzp3pREW/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Skype"
              >
                skype
              </a>
            </Heading>
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>

      <Grid.Col xs={12} sm={4} smOffset={2}>
        <Grid.Row colMobileSpaced="sm">
          <Grid.Col xs={12}>
            <Heading size={4} typeface="bold">
              <ChangeableText variants={['expert', 'guru', 'ninja']} /> at:
            </Heading>
          </Grid.Col>
          <Grid.Col xs={6} sm={12}>
            <Spacing height={48} hiddenAt="mobile" />
            <List>
              <List.Item>ES6</List.Item>
              <List.Item>React + Redux</List.Item>
              <List.Item>SPA, PWA</List.Item>
            </List>
          </Grid.Col>
          <Grid.Col xs={6} sm={12}>
            <List>
              <List.Item>GraphQL, WebSockets</List.Item>
              <List.Item>jest, enzyme</List.Item>
            </List>
          </Grid.Col>
        </Grid.Row>
      </Grid.Col>
    </Grid.Row>

    <Spacing height={48} hiddenAt="mobile" />
    <Spacing height={12} visibleAt="mobile" />

    <Grid.Row colEqualHeight colMobileSpaced="sm" data-aos="fade-up">
      <Grid.Col xs={12} sm={4}>
        <ProjectCard
          href="https://buddy.com/"
          ariaLabel="buddy.com - Working with analytics for IoT data."
        >
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
        <ProjectCard
          href="https://publbox.com/"
          ariaLabel="publbox.com - UI library. Optimization of app loading time."
        >
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
