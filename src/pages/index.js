import React from 'react';
import Layout from '../components/layout';
import hero from '../images/niko-matses_ui-designer_chalkboard-wireframing_photo-by-justine-chang.jpg';

// import Listing from '../components/listing';

import SEO from '../components/seo';

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <header class="hero hero__bg-image--chalkboard" id="section1" style={{ background: "#999999" }}>
      <div class="hero__overlay"></div>
      <h1 class="hero__headline ml12">UX Designer <span class="letters">&amp;</span> Web Developer</h1>
    </header>
    {/* <Listing /> */}
  </Layout>
);

export default IndexPage;
