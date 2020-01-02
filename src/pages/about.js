import React from 'React';
import Layout from '../components/layout';

const About = ({ location }) => (
  <Layout location={location}>
    <section className="section__about">
      <h1 className="section__heading">About Me</h1>
      <p className="section__intro">
        React developer focused on front-end mobile responsive design. My
        approach advocates Design Thinking and User Experience planning to
        ensure that the best possible product gets built.
      </p>
    </section>
  </Layout>
);

export default About;
