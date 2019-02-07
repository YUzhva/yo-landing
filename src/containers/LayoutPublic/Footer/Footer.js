import React from 'react';

import { Heading, ChangeableText } from 'components';
import { Grid } from 'restyled';

const Footer = () => (
  <footer className="yo-footer">
    <Grid>
      <Grid.Row colEqualHeight colMobileSpaced="md">
        <Grid.Col xs={12} sm={6}>
          <Heading className="mobile-only--center" size={2} weight="bold">
            Let&apos;s colaborate together on your <ChangeableText variants={['significant', 'markable', 'essential']} highlight /> project!
          </Heading>
        </Grid.Col>

        <Grid.Col xs={12} sm={6} contentAlign="middle">
          <Heading size={4} weight="bold">
            Contact us:&nbsp;
          </Heading>
          <Heading size={4}>
            <a
              href="mailto:ask@yoyoyo.pro"
              className="colored-black circular-book font-size-small"
              aria-label="Contact us ask@yoyoyo.pro"
            >
              ask@yoyoyo.pro
            </a>
          </Heading>
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </footer>
);

export default Footer;
