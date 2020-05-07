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
  max-width: 960px;
  padding: 1rem;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
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
      </h1>
      <Link
        to="/about"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        About
        </Link>
      <Link
        to="/portfolio"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        Portfolio
        </Link>
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
