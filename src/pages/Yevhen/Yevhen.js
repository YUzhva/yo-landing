import React from 'react';
import { Image } from 'react-bootstrap';

import {
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
    <Grid.Row>
      <Grid.Col>
        <Image src={ImgYevhen} alt="yevhen-as-lego" responsive />
      </Grid.Col>
    </Grid.Row>

    <Spacing height={48} />

    <Grid.Row>
      <Grid.Col xs={12} sm={6}>
        <Heading size={3} typeface="bold">
          Yevhen, Front-End developer
        </Heading>
        <Spacing height={48} />
        <Paragraph>
          Flexible React developer with a keen eye for details.
        </Paragraph>
        <Spacing height={24} />
        <Paragraph>
        Within 6 years of experience, I was involved in teams where we developed
        a lot of high loaded and scalable web solutions for IoT, bank, FinTech,
        healthcare and social network areas.
        </Paragraph>
        <Spacing height={24} />
        <Paragraph>
          Daily collaboration through Slack, Skype, GitHut, Bitbucket,
          Google Drive, JIRA makes me look like a daily offline developer.
        </Paragraph>
        <Spacing height={64} />
        <Heading color="yellow" size={4} inline>
          <span>linkedin</span>
          <Spacing width={24} />
          <span>github</span>
          <Spacing width={24} />
          <span>upwork</span>
          <Spacing width={24} />
          <span>skype</span>
        </Heading>
      </Grid.Col>

      <Grid.Col xs={12} sm={4} smOffset={2}>
        <Heading size={4} typeface="bold">
          daily tools:
        </Heading>
        <Spacing height={48} />
        <Paragraph>
          ES6
          <br />
          React + Redux
          <br />
          redux-saga
          <br />
          jest
          <br />
          enzyme
        </Paragraph>
      </Grid.Col>
    </Grid.Row>

    <Spacing height={48} />

    <Grid.Row colEqualHeight>
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
          <Heading size={3} color="yellow">
            Your next big project (=
          </Heading>
        </ProjectCard>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export default Yevhen;
