import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import Helmet from 'react-helmet-async';

import {
  ChangeableText,
  List,
  ProjectCard,
  Heading,
  Paragraph,
  Spacing,
} from 'components';

import { Grid } from 'restyled';

import ImgOlenka from './Olenka.svg';
import ImgCloudcoach from './cloudcoach-project.png';
import ImgCropstream from './cropstream-project.png';

const Olenka = () => (
  <Grid>
    <Helmet>
      <title>
        Olenka, UX/UI Designer
      </title>

      <meta name="description" content="Expert in user experience (UX), interface (UI), and marketing design. I've worked on agriculture, finance, blockchain projects. Top-Rated Freelancer." />
      <meta name="keywords" content="olenka, tomchuk, ux, ui, designer, top rated, upwork, best, freelancer, to hire, 2019, agency" />

      <meta property="og:image" content={ImgOlenka} />
    </Helmet>

    <Grid.Row data-aos="zoom-out-right" data-aos-offset="0">
      <Grid.Col>
        <Image className="mobile-only--center" src={ImgOlenka} alt="olenka-as-lego" responsive />
      </Grid.Col>
    </Grid.Row>

    <Spacing height={48} hiddenAt="mobile" />

    <Grid.Row colMobileSpaced="sm" data-aos="fade-in" data-aos-duration="1500" data-aos-offset="0">
      <Grid.Col xs={12} sm={6}>
        <Heading className="mobile-only--center" size={3} weight="bold">
          Olenka, UX/UI Designer
        </Heading>
        <Spacing height={48} />
        <Paragraph>
          <span role="img" aria-label="wave">👩‍💻</span>
          I&apos;m skilled in user experience, interface, and marketing design.
        </Paragraph>
        <Spacing height={24} />
        <Paragraph>
          <span role="img" aria-label="wave">🤝</span>
          Usually, I collaborate with members of the development and marketing
          teams. People describe me as responsible team-player
          and I&apos;m comfortable taking initiative as well. I&apos;ve worked on social
          & entertainment, agriculture, finance, blockchain projects.
        </Paragraph>
        <Spacing height={24} />
        <Paragraph>
          <span role="img" aria-label="wave">🏆</span>
          Upwork Top-Rated Freelancer.
        </Paragraph>

        <Spacing height={64} hiddenAt="mobile" />

        <Grid.Row className="mobile-only--center" colMobileSpaced="md">
          <Grid.Col xs={6} sm={3} lg={2}>
            <Heading color="yellow" size={4}>
              <a
                href="https://www.linkedin.com/in/olenatomchuk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                linkedin
              </a>
            </Heading>
          </Grid.Col>
          <Grid.Col xs={6} sm={3} lg={2}>
            <Heading color="yellow" size={4}>
              <a
                href="https://dribbble.com/o_tomchuk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
              >
                dribbble
              </a>
            </Heading>
          </Grid.Col>
          <Grid.Col xs={6} sm={3} lg={2}>
            <Heading color="yellow" size={4}>
              <a
                href="https://www.upwork.com/freelancers/~01c62b2e955c1e036b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="UpWork"
              >
                upwork
              </a>
            </Heading>
          </Grid.Col>
          <Grid.Col xs={6} sm={3} lg={2}>
            <Heading color="yellow" size={4}>
              <a
                href="https://join.skype.com/invite/gt1WTcqRsJGA/"
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
            <Heading size={4} weight="bold">
              <ChangeableText variants={['expert', 'guru', 'ninja']} /> at:
            </Heading>
          </Grid.Col>
          <Grid.Col xs={6} sm={12}>
            <Spacing height={48} hiddenAt="mobile" />
            <List>
              <List.Item>Sketch</List.Item>
              <List.Item>Figma</List.Item>
              <List.Item>Photoshop</List.Item>
              <List.Item>Illustrator</List.Item>
            </List>
          </Grid.Col>
          <Grid.Col xs={6} sm={12}>
            <List>
              <List.Item>Balsamiq Mockups</List.Item>
              <List.Item>Invision</List.Item>
              <List.Item>Marvel</List.Item>
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
          href="https://cloudcoach.com/"
          ariaLabel="cloudcoach.com - Responsive web-site redesign"
        >
          <Image src={ImgCloudcoach} alt="cloudcoach-project" responsive />
          <Heading size={4} fontface="bold" center>
            cloudcoach.com
          </Heading>
          <Spacing height={12} />
          <Paragraph center>
            Responsive web-site redesign
          </Paragraph>
          <Spacing height={24} />
        </ProjectCard>
      </Grid.Col>
      <Grid.Col xs={12} sm={4}>
        <ProjectCard
          href="https://www.cropstream.com/"
          ariaLabel="cropstream.com - Work on design system, redesign of iOS application, designing of Android mobile app."
        >
          <Image src={ImgCropstream} alt="cropstream-project" responsive />
          <Heading size={4} fontface="bold" center>
            cropstream.com
          </Heading>
          <Spacing height={12} />
          <Paragraph center>
            Work on design system, redesign of iOS application, designing of
            Android mobile app.
          </Paragraph>
          <Spacing height={12} />
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

export default Olenka;
