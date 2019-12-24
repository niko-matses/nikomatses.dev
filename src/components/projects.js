import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Projects = () => (
  <StaticQuery
    query={graphql`
      query ProjectArchive {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Recent Projects</h3>
          {allMarkdownRemark.edges.map(edge => (
            <li>{edge.node.frontmatter.title}</li>
          ))}
        </aside>
      </>
    )}
  />
);

export default Projects;
