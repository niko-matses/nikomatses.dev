import React from 'react';
import Layout from '../components/layout';
import Projects from '../components/projects';

const Portfolio = ({ location }) => (
  <Layout location={location}>
    <section className="section__about">
      <h1 className="section__heading">Projects</h1>
      <p className="section__intro">Here are some web apps I've worked on.</p>
    </section>
    <Projects />
  </Layout>
);

export default Portfolio;
