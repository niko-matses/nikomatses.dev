import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../images/niko-matses_logo.svg';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #39af84;
  margin-bottom: 0;
  img {
    margin-bottom: 0;
  }
`;
const HeaderContainer = styled.div`
  margin: 0 auto;
  padding: 1rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>

      <nav class="nav">
        <ul class="nav__content ml11">
          <span class="text-wrapper">
            {/* <span class="line line1"></span>
            <span class="letters">Niko Matses</span> */}
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <img
                className="header__logo"
                style={{ width: '100px' }}
                src={Logo}
                alt="Niko Matses"
              />
            </Link>
          </span>
        </ul>
        <nav class="scrollto-nav nav__menu">
          <ul class="nav__menu-items  ml11">
            <li class="nav__item text-wrapper">

              <Link
                to="/work"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  marginRight: `30px`
                }}
              >
                Work
        </Link>
            </li>
            <li class="nav__item text-wrapper">
              <Link
                to="/about"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                  marginRight: `30px`
                }}
              >
                About
        </Link>
            </li>
            <li class="nav__item text-wrapper">
              <Link
                to="#section6"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                Contact
        </Link>
            </li>

          </ul>
        </nav>
      </nav>

    </HeaderContainer>
  </HeaderWrapper>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
