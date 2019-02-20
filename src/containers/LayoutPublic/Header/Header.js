import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/lib/Image';

import { Heading, Spacing } from 'components';
import { Grid } from 'restyled';

import ButtonMenu from './ButtonMenu';

import YOLogo from './yo-logo.svg';

let elCrispChatLinks;
let elCrispChatCircleLink;

const assignCrispChatElements = () => {
  if (window.$crisp) {
    window.$crisp.push(['on', 'session:loaded', () => {
      if (!elCrispChatLinks) {
        // NOTE: possible selector: #crisp-chatbox a
        elCrispChatLinks = window.document.querySelectorAll('div.crisp-client a');
        elCrispChatCircleLink = elCrispChatLinks[elCrispChatLinks.length - 1];
      }
    }]);
  }
};

const moveCrispChatLink = (isMobileMenuVisible) => {
  if (elCrispChatCircleLink) {
    const movementDirection = isMobileMenuVisible ? 'top' : 'bottom';

    switch (movementDirection) {
      case 'top':
        elCrispChatCircleLink.setAttribute(
          'style',
          'transition: bottom 0.5s !important; bottom: 70px !important',
        );
        break;
      case 'bottom':
        elCrispChatCircleLink.setAttribute(
          'style',
          'transition: bottom 0.5s !important',
        );
        break;
      // no default
    }
  }
};

class Header extends Component {
  state = { isMobileMenuVisible: false };

  componentDidMount() {
    assignCrispChatElements();
  }

  toggleMobileMenu = () => {
    this.setState(
      (prevState) => ({ isMobileMenuVisible: !prevState.isMobileMenuVisible }),
      () => moveCrispChatLink(this.state.isMobileMenuVisible),
    );
  }

  closeMobileMenu = () => {
    if (this.state.isMobileMenuVisible) {
      this.setState(
        { isMobileMenuVisible: false },
        () => moveCrispChatLink(this.state.isMobileMenuVisible),
      );
    }
  }

  render() {
    return (
      <header>
        <div className="yo-header" data-aos="fade-down" data-aos-delay="250" data-aos-offset="0">
          <Grid>
            <Grid.Row colEqualHeight colMobileEqual="middle">
              <Grid.Col xs={4}>
                <NavLink to="/" onClick={this.closeMobileMenu} aria-label="Home page">
                  <Image src={YOLogo} className="yo-header__logo" alt="yo-logo" responsive />
                </NavLink>
              </Grid.Col>

              <Grid.Col
                xs={8}
                className="yo-header__navigation"
                smHidden
                mdHidden
                lgHidden
              >
                <ButtonMenu
                  isOpen={this.state.isMobileMenuVisible}
                  onClick={this.toggleMobileMenu}
                />
              </Grid.Col>

              <Grid.Col
                sm={8}
                className="yo-header__navigation"
                contentAlign="middle"
                xsHidden
              >
                <Heading size={4} weight="bold" inline>
                  <nav>
                    <NavLink
                      to="/olenka"
                      className="yo-header__menu-item"
                      activeClassName="yo-header__menu-item--active"
                      aria-label="About Olenka page"
                    >
                      about Olenka
                    </NavLink>
                    <Spacing width={24} />
                    <NavLink
                      to="/yevhen"
                      className="yo-header__menu-item"
                      activeClassName="yo-header__menu-item--active"
                      aria-label="About Yevhen page"
                    >
                      about Yevhen
                    </NavLink>
                  </nav>
                </Heading>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </div>

        <div className={`yo-header__menu-mobile yo-header__menu-mobile--${this.state.isMobileMenuVisible ? 'visible' : 'invisible'}`}>
          <Grid>
            <Heading
              size={4}
              weight="bold"
              center
            >
              <Grid.Row>
                <Grid.Col xs={6} noPadding>
                  <NavLink
                    to="/olenka"
                    className="yo-header__menu-item"
                    activeClassName="yo-header__menu-item--active"
                    aria-label="About Olenka page"
                  >
                    about Olenka
                  </NavLink>
                </Grid.Col>
                <Grid.Col xs={6} noPadding>
                  <NavLink
                    to="/yevhen"
                    className="yo-header__menu-item"
                    activeClassName="yo-header__menu-item--active"
                    aria-label="About Yevhen page"
                  >
                    about Yevhen
                  </NavLink>
                </Grid.Col>
              </Grid.Row>
            </Heading>
          </Grid>
        </div>
      </header>
    );
  }
}

export default Header;
