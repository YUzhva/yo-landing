import React from 'react';
import Image from 'react-bootstrap/lib/Image';
import { Helmet } from 'react-helmet';

import {
  ChangeableText,
  List,
  Button,
  Heading,
  Paragraph,
  Spacing,
} from 'components';
import { Grid } from 'restyled';

import Persons from './images/Persons.svg';
import Contribute from './images/Contribute.svg';

const Home = () => (
  <div className="yo-home-page">
    <Helmet>
      <title>
        YO! mates - Yevhen & Olenka
      </title>
    </Helmet>

    {/* SECTION 1 */}
    <Grid data-aos="fade-up" data-aos-delay="250" data-aos-offset="0">
      <Grid.Row colEqualHeight>
        <Grid.Col xs={12} md={5}>
          {/* DEPENDING CONTENT */}
          <Grid.Row colMobileSpaced="sm">
            <Grid.Col xs={12}>
              <Heading className="mobile-only--center" color="yellow" typeface="bold">
                <ChangeableText variants={['Bonjour', '👋', 'Hello', 'Привіт', 'Hola']} />
              </Heading>
              <Spacing height={12} hiddenAt="mobile" />
              <Heading
                size={2}
                typeface="bold"
                className="mobile-only--center"
                data-aos="fade-up"
                data-aos-delay="350"
                data-aos-offset="0"
              >
                We are YO!&nbsp;mates
                <br />
                Yevhen & Olenka
              </Heading>
              <Spacing height={24} />
            </Grid.Col>
            <Grid.Col xs={12} data-aos="fade-up" data-aos-delay="450" data-aos-offset="0">
              <Heading size={3} typeface="medium" justify>
                We build awesome products with a power of user-friendly Design and
                fast Front-end development.
                We also enjoy to travel and try new beer tastes.
              </Heading>
            </Grid.Col>
            <Grid.Col xs={12} mdHidden lgHidden>
              <Spacing height={24} hiddenAt="mobile" />
              <Image
                src={Persons}
                className="center-block"
                alt="yevhen-and-olenka-as-lego"
                responsive
              />
            </Grid.Col>
            <Grid.Col xs={12} data-aos="fade-up" data-aos-delay="550" data-aos-offset="250">
              <Spacing height={48} />
              <Button className="yo-home-page__start-btn">
                start a project
              </Button>
            </Grid.Col>
          </Grid.Row>

        </Grid.Col>

        <Grid.Col md={6} mdOffset={1} xsHidden smHidden contentAlign="middle">
          <Image
            src={Persons}
            className="center-block"
            alt="yevhen-and-olenka-as-lego"
            responsive
          />
        </Grid.Col>
      </Grid.Row>
    </Grid>

    {/* SECTION 2 */}
    <Grid className="yo-home-page__section" data-aos="fade-up">
      <Grid.Row>
        <Grid.Col xs={12}>
          <Heading size={2} typeface="bold">
            Services, that we provide
          </Heading>
        </Grid.Col>
      </Grid.Row>

      <Spacing height={48} />

      <Grid.Row colMobileSpaced="sm">
        <Grid.Col xs={12} sm={6} md={5}>
          <List>
            <List.Item>
              UX design (defining personas, user scenarios, user stories, use cases)
            </List.Item>
            <List.Item>
              Wireframing
            </List.Item>
            <List.Item>
              High-fidelity mockups for web
            </List.Item>
            <List.Item>
              Mobile applications design
            </List.Item>
            <List.Item>
              Interactive Prototypes
            </List.Item>
          </List>
        </Grid.Col>

        <Grid.Col xs={12} sm={6} md={5} mdOffset={1}>
          <List>
            <List.Item>
              UX design (defining personas, user scenarios, user stories, use cases)
            </List.Item>
            <List.Item>
              Wireframing
            </List.Item>
            <List.Item>
              High-fidelity mockups for web
            </List.Item>
            <List.Item>
              Mobile applications design
            </List.Item>
            <List.Item>
              Interactive Prototypes
            </List.Item>
          </List>
        </Grid.Col>
      </Grid.Row>
    </Grid>

    {/* SECTION 3 */}
    <Grid className="yo-home-page__section" data-aos="fade-up">
      <Grid.Row colMobileSpaced="md" colEqualHeight>
        <Grid.Col xs={12} sm={6}>
          <Heading size={2} typeface="bold">
            Contributing to open-source
          </Heading>

          <Spacing height={48} />

          <Paragraph>React leaflet markercluster.</Paragraph>
          <Heading color="yellow" size={4} inline>
            <a href="https://github.com/YUzhva/react-leaflet-markercluster/" target="_blank" rel="noopener noreferrer">
              code
            </a>
            <Spacing width={12} />
            <a href="https://yuzhva.github.io/react-leaflet-markercluster/" target="_blank" rel="noopener noreferrer">
              demo
            </a>
          </Heading>
        </Grid.Col>
        <Grid.Col xs={12} sm={6} contentAlign="middle">
          <Image src={Contribute} alt="lego-blocks" responsive />
        </Grid.Col>
      </Grid.Row>
    </Grid>

    {/* SECTION 4 */}
    <Grid className="yo-home-page__section" data-aos="fade-up">
      <Grid.Row>
        <Grid.Col xs={12}>
          <Heading size={2} typeface="bold">
            Testimonials
          </Heading>
        </Grid.Col>
      </Grid.Row>

      <Spacing height={48} hiddenAt="mobile" />

      <Grid.Row colMobileSpaced="lg">
        <Grid.Col xs={12} sm={6} md={5}>
          <Heading size={4} typeface="bold">
            <span className="yo-home-page__title--decorated">for Olena</span>
          </Heading>

          <Spacing height={64} hiddenAt="mobile" />
          <Spacing height={24} visibleAt="mobile" />

          <Paragraph justify>
            Olena has great designing skills and she gets work done quickly and
            on time. She is also clear, respectful and communicative. Olena also
            has good understanding and knowledge of the iOS design guidelines.
            <Spacing height={24} />
            <i>Upwork client, August 2018</i>
          </Paragraph>
          <Spacing height={48} />
          <Paragraph justify>
            Within a few months of working with Olena on KindGeek she handled
            everything from reviewing the users needs, wireframing ideas
            complete with all necessary styling to implementing the full UI/UX
            expertise for our projects. Olena is proficient on all of the latest
            versions of the most cutting edge design software and is always
            eager to learn new skills. At Kindgeek she has worked on landing
            pages, mobile Apps, CRM systems, illustrations and business
            presentations for some of our clients and few inside projects.
            She is able to thoroughly focus on every project and is not easily
            distracted. Additionally, Olena has shown a leadership qualities
            and good communication skills with our clients.
            <Spacing height={24} />
            <i>Design manager @Kindgeek, May 2018</i>
          </Paragraph>
        </Grid.Col>

        <Grid.Col xs={12} sm={6} md={5} mdOffset={1}>
          <Heading size={4} typeface="bold">
            <span className="yo-home-page__title--decorated">for Yevhen</span>
          </Heading>

          <Spacing height={64} hiddenAt="mobile" />
          <Spacing height={24} visibleAt="mobile" />

          <Paragraph justify>
          Yevhen is an absolute pleasure to work with. He did great work for our
          React project. He is always available and very open with
          communication. Top quality work. Very experienced. Very attentive to
          details. Helped spot a few issues with our API not related to the
          project. One of the best freelancers we have worked with.
            <Spacing height={24} />
            <i>Upwork client, December 2018</i>
          </Paragraph>
          <Spacing height={48} />
          <Paragraph justify>
            Within a few months of working with Olena on KindGeek she handled
            everything from reviewing the users needs, wireframing ideas
            complete with all necessary styling to implementing the full UI/UX
            expertise for our projects. Olena is proficient on all of the latest
            versions of the most cutting edge design software and is always
            eager to learn new skills. At Kindgeek she has worked on landing
            pages, mobile Apps, CRM systems, illustrations and business
            presentations for some of our clients and few inside projects.
            She is able to thoroughly focus on every project and is not easily
            distracted. Additionally, Olena has shown a leadership qualities
            and good communication skills with our clients.
            <Spacing height={24} />
            <i>Design manager @Kindgeek, May 2018</i>
          </Paragraph>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
);

export default Home;
