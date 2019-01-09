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

import ImgOlenka from './Olenka.svg';
import ImgCloudcoach from './cloudcoach-project.png';
import ImgCropstream from './cropstream-project.png';

const Olenka = () => (
  <Grid>
    <Helmet>
      <title>
        Olenka, UX/UI Designer
      </title>
    </Helmet>

    <Grid.Row data-aos="zoom-out-right" data-aos-offset="0">
      <Grid.Col>
        <Image src={ImgOlenka} alt="olenka-as-lego" responsive />
      </Grid.Col>
    </Grid.Row>

    <Spacing height={48} hiddenAt="mobile" />

    <Grid.Row data-aos="fade-in" data-aos-duration="1500" data-aos-offset="0">
      <Grid.Col xs={12} sm={6}>
        <Heading size={3} typeface="bold">
          Olenka, UX/UI Designer
        </Heading>
        <Spacing height={48} hiddenAt="mobile" />
        <Paragraph>
          I’m skilled in user experience, interface and marketing design.
        </Paragraph>
        <Spacing height={24} />
        <Paragraph>
          Usually collaborate with members of the development and marketing
          teams of the product. People describe me as responsible team-player
          and I’m  comfortable taking initiative as well.
          Upwork Top-Rated Freelancer.
        </Paragraph>
        <Spacing height={24} />
        <Paragraph>
          I’ve worked on are social & entertainment, agriculture, finance,
          blockchain projects.
        </Paragraph>
        <Spacing height={64} />
        <Heading color="yellow" size={4} inline>
          <a href="https://www.linkedin.com/in/olenatomchuk/" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          <Spacing width={24} />
          <a href="https://dribbble.com/o_tomchuk/" target="_blank" rel="noopener noreferrer">
            dribbble
          </a>
          <Spacing width={24} />
          <a href="https://www.upwork.com/freelancers/~01c62b2e955c1e036b/" target="_blank" rel="noopener noreferrer">
            upwork
          </a>
          <Spacing width={24} />
          <a href="https://join.skype.com/invite/gt1WTcqRsJGA/" target="_blank" rel="noopener noreferrer">
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
          Sketch
          <br />
          Figma
          <br />
          Photoshop
          <br />
          Illustrator
          <br />
          Balsamiq Mockups
          <br />
          Invision
          <br />
          Marvel
        </Paragraph>
      </Grid.Col>
    </Grid.Row>

    <Spacing height={48} hiddenAt="mobile" />

    <Grid.Row colEqualHeight data-aos="fade-up">
      <Grid.Col xs={12} sm={4}>
        <ProjectCard href="https://cloudcoach.com/">
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
        <ProjectCard href="https://www.cropstream.com/">
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
