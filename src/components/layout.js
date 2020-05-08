import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Spring } from 'react-spring/renderprops';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Header from './header';
import Footer from './footer';
// import Projects from './projects';
import './layout.css';
import './main.css';

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  // grid-template-columns: 3fr 1fr;
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
        from={{ height: location.pathname === '/' ? 0 : 300, opacity: location.pathname === '/' ? 0 : 1 }}
        to={{ height: location.pathname === '/' ? 300 : 0, opacity: location.pathname === '/' ? 1 : 0 }}
      >
        {styles => (
          <div style={{ position: 'absolute', height: '100vh', overflow: 'hidden', ...styles }}>

          </div>
        )}
      </Spring>
      {/* {location.pathname === '/' && (
        <Img fluid={data.file.childImageSharp.fluid} />
      )} */}
      <MainLayout>
        <div className="main__content">{children}</div>
        {/* <Projects /> */}
      </MainLayout>

      <Footer>

      </Footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
