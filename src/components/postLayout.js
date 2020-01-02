import React, { Component } from 'react';
import Layout from './layout';
import Projects from './projects';

export default class postLayout extends Component {
  render() {
    return (
      <Layout>
        <h1>Post Layout</h1>
        <Projects />
      </Layout>
    );
  }
}
