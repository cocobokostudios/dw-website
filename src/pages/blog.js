import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import styled from 'styled-components';

const Blog = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout title="Blog">
      <header>
        <h1>Blog</h1>
        <h2>These are my thoughts and experiences with technology, game development, and whatever else I come across in my day-to-day adventures.</h2>
      </header>
      <hr />
      <section>
        <PostList posts={posts} />
      </section>
    </Layout>
  );
};

export default Blog;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--size-900);
  margin-bottom: var(--size-700);

  h1 {
    max-width: none;
  }
`;

const StyledMetaLinks = styled.div`
  display: flex;
  flex-direction: row;
`

export const homePageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          excerpt
          title
          tags
          categories
        }
      }
    }
  }
`;
