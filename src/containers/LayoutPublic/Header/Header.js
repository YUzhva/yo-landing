import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/lib/Image';

import { Heading, Spacing } from 'components';
import { Grid } from 'restyled';

import YOLogo from './yo-logo.svg';

class Header extends Component {
  state = { isMobileMenuVisible: false };

  toggleMobileMenu = () => {
    this.setState((prevState) => ({ isMobileMenuVisible: !prevState.isMobileMenuVisible }));
  }

  render() {
    return (
      <div className="yo-header">
        <Grid>
          <Grid.Row colEqualHeight>
            <Grid.Col xs={3}>
              <NavLink to="/">
                <Image src={YOLogo} className="yo-header__logo" alt="yo-logo" responsive />
              </NavLink>
            </Grid.Col>

            {/*
              <Grid.Col
                xs={9}
                className="text-right"
                smHidden
                mdHidden
                lgHidden
              >
                <button type="button" onClick={this.toggleMobileMenu}>
                  =
                </button>
              </Grid.Col>
            */}

            <Grid.Col
              sm={9}
              className="text-right"
              contentAlign="middle"
              xsHidden
            >
              <Heading size={4} typeface="bold" inline>
                <NavLink
                  to="/olenka"
                  className="yo-header__menu-item"
                  activeClassName="yo-header__menu-item--active"
                >
                  about Olenka
                </NavLink>
                <Spacing width={24} />
                <NavLink
                  to="/yevhen"
                  className="yo-header__menu-item"
                  activeClassName="yo-header__menu-item--active"
                >
                  about Yevhen
                </NavLink>
                <Spacing width={24} />
                <NavLink
                  to="#"
                  className="yo-header__menu-item"
                  activeClassName="yo-header__menu-item--active"
                >
                  contact us
                </NavLink>
              </Heading>
            </Grid.Col>
          </Grid.Row>

          {
            this.state.isMobileMenuVisible && (
              <Grid.Row>
                <Grid.Col xs={12}>
                  <NavLink
                    to="/olenka"
                    className="yo-header__menu-item"
                    activeClassName="yo-header__menu-item--active"
                  >
                    about Olenka
                  </NavLink>
                </Grid.Col>

                <Grid.Col width="16">
                  <NavLink
                    to="/yevhen"
                    className="yo-header__menu-item"
                    activeClassName="yo-header__menu-item--active"
                  >
                    about Yevhen
                  </NavLink>
                </Grid.Col>
              </Grid.Row>
            )
          }
        </Grid>
      </div>
    );
  }
}

export default Header;
