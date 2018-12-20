import React from 'react';
import { Grid, Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Logo from '../../media/images/Logo.svg';
import './PageHeader.scss';

const PageHeader = () => (
  <Grid container>
    <Grid.Row>
      <Grid.Column>
        <Menu text className="YO Header Main-menu">
          <Menu.Item
            position="left"
            name="home"
            className="Header__logo"
          >
            <Image src={Logo} />
          </Menu.Item>
          <Menu.Menu className="Header__menu" position="right">
            <Menu.Item name="olenka">
              <Link to="/olenka" className="Header__menu-item font-size-medium circular-bold colored-black">
                about Olenka
              </Link>
            </Menu.Item>
            <Menu.Item name="yevhen">
              <Link to="/yevhen" className="Header__menu-item font-size-medium circular-bold colored-black">
                about Yevhen
              </Link>
            </Menu.Item>
            <Menu.Item
              name="home"
              className="Header__menu-item font-size-medium circular-bold colored-black"
            >
              contact us
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default PageHeader;
