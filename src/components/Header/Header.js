import React from 'react';
import { Grid, Menu, Image } from 'semantic-ui-react';

import Logo from '../../media/images/Logo.svg';
import './Header.scss';

const Header = () => {
  return (
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
              <Menu.Item
                name="home"
                className="Header__menu-item font-size-medium circular-bold"
              >
                about Olenka
              </Menu.Item>
              <Menu.Item
                name="home"
                className="Header__menu-item font-size-medium circular-bold"
              >
                about Yevhen
              </Menu.Item>
              <Menu.Item
                name="home"
                className="Header__menu-item font-size-medium circular-bold"
              >
                contact us
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Header;
