import React from 'react';
import Image from 'react-bootstrap/lib/Image';

import {
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
    <Grid.Row data-aos="zoom-out-right">
      <Grid.Col>
        <Image src={ImgOlenka} alt="olenka-as-lego" responsive />
      </Grid.Col>
    </Grid.Row>

    <Spacing height={48} />

    <Grid.Row data-aos="fade-in" data-aos-duration="1500">
      <Grid.Col xs={12} sm={6}>
        <Heading size={3} typeface="bold">
          Olenka, UX/UI Designer
        </Heading>
        <Spacing height={48} />
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
          <span>linkedin</span>
          <Spacing width={24} />
          <span>dribbble</span>
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

    <Spacing height={48} />

    <Grid.Row colEqualHeight data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
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
          <Heading size={3} color="yellow">
            Your next big project (=
          </Heading>
        </ProjectCard>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export default Olenka;
