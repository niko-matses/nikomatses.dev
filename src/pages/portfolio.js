import React from 'React';
import Layout from '../components/layout';
import Projects from '../components/projects';

const Portfolio = () => (
  <Layout>
    <section className="section__about">
      <h1 className="section__heading">Projects</h1>
      <p className="section__intro">Here are some web apps I've worked on.</p>
    </section>
    <Projects />
  </Layout>
);

export default Portfolio;
