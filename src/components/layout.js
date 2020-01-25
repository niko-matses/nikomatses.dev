import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Spring } from 'react-spring/renderprops';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './header';
import Projects from './projects';
import './layout.css';

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 30px;
`;

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(
        relativePath: {
          regex: "/niko-matses_ui-designer_chalkboard-wireframing_photo-by-justine-chang.jpg/"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Spring
        from={{ height: location.pathname === '/' ? 100 : 800 }}
        to={{ height: location.pathname === '/' ? 800 : 600 }}
      >
        {styles => (
          <div style={{ overflow: 'hidden', ...styles }}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )}
      </Spring>
      {/* {location.pathname === '/' && (
        <Img fluid={data.file.childImageSharp.fluid} />
      )} */}
      <MainLayout>
        <div>{children}</div>
        <Projects />
      </MainLayout>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
