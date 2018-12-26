import React from 'react';

import { Heading } from 'components';
import { Grid } from 'restyled';

const Footer = () => (
  <div className="yo-footer">
    <Grid>
      <Grid.Row colEqualHeight>
        <Grid.Col xs={12} sm={6} md={5}>
          <Heading size={2} typeface="bold">
            Let’s colaborate together on your next project!
          </Heading>
        </Grid.Col>

        <Grid.Col xs={12} sm={6} md={5} mdOffset={1} contentAlign="middle">
          <Heading size={4} typeface="bold">
            Contact us:
          </Heading>
          <Heading size={4}>
            <a
              href="mailto:hello@yo-development.com"
              className="colored-black circular-book font-size-small"
            >
              hello@yo-development.com
            </a>
          </Heading>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </div>
);

export default Footer;
