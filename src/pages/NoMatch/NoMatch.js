import React from 'react';

import { Heading, TextSection, Spacing } from 'components';

import { Grid } from 'restyled';

const NoMatch = ({ location: { pathname } }) => (
  <Grid>
    <Grid.Row>
      <Grid.Col contentAlign="middle">
        <Heading>
          ¯\_(ツ)_/¯
        </Heading>
      </Grid.Col>

      <Spacing height={64} />

      <Grid.Col contentAlign="middle">
        <Heading size={3} center>
          Ooops - <TextSection color="yellow" weight="bold">404</TextSection> - we do not have such a page <TextSection highlighted>{pathname}</TextSection> at our website.
        </Heading>
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export default NoMatch;
