import React from 'react';
import PropTypes from 'prop-types';
import {graphql, Link} from 'gatsby';
import DefaultLayout from 'components/layouts/DefaultLayout';

const Docs = ({data, location}) => (
  <DefaultLayout location={location}>
    <Link to={data.markdownRemark.fields.slug}>
      {data.markdownRemark.frontmatter.title}
    </Link>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
    <pre>{JSON.stringify(location, null, 2)}</pre>
  </DefaultLayout>
);

Docs.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const pageQuery = graphql`
  query getDocsMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
      }
      fields {
        path
        slug
      }
    }
  }
`;

export default Docs;
