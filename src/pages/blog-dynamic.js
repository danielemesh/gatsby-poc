import React from 'react';
import Link from 'gatsby-link';
import {
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  Card,
  CardSubtitle,
  CardText
} from 'reactstrap';

export default ({data}) => {
  const nodes = data.allMarkdownRemark.edges.map(e => e.node);
  
  return (
      <Container fluid>
        <Row>
          <Col>
            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          </Col>
        </Row>
        {nodes.map(node => {
          const { frontmatter } = node;
          return (
              <div key={node.id}>
                <Row>
                  <Col>
                    <Card>
                      <CardBody>
                        <CardTitle>{frontmatter.title}</CardTitle>
                        <CardSubtitle>{frontmatter.date}</CardSubtitle>
                        <CardText>{node.excerpt}</CardText>
                        <Link to={node.fields.slug}>Read More...</Link>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
                <br/>
              </div>
          );
        })}
      </Container>
  );
}

export const query = graphql`
  query BlogDynamicQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;