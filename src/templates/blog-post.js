import React from "react";
import {Col, Container, Row} from 'reactstrap';

export default ({data}) => {
  const post = data.markdownRemark;
  
  return (
      <Container fluid>
        <Row>
          <Col>
            <br/>
            <h1>This page was created programmatically during the build process</h1>
            <br/>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>{post.frontmatter.title}</h3>
          </Col>
        </Row>
        <Row>
          <Col dangerouslySetInnerHTML={{ __html: post.html }}>
          </Col>
        </Row>
      </Container>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;