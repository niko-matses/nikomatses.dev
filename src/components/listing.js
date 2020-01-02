import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import { arrayOf } from 'prop-types';

const LISTING_QUERY = graphql`
  query ProjectListing {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;

const Post = styled.article`
  box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 2rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  h3 {
    margin-bottom: 0.5rem;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: sans-serif;
    text-decoration: underline;
    color: teal;
  }
`;

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h3>{node.frontmatter.title}</h3>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link className="read-more" to={`/posts${node.frontmatter.slug}`}>
            Read More
          </Link>
        </Post>
      ))
    }
  />
);
export default Listing;
