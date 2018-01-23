import React, {Component} from 'react';
import {
  CardText, CardTitle, Container, Row, Card, CardBody,
  Col, Pagination, PaginationItem, PaginationLink,
} from 'reactstrap';
import Link from 'gatsby-link';

export default class BlogPagination extends Component {
  
  constructor({data}) {
    super();
    console.log(data);
    this.state = {
      posts: data.allPaginatedPostsPost.edges.map(e => e.node),
    };
    
    this.getPostsByUserId = this.getPostsByUserId.bind(this);
    this.onPaginationClick = this.onPaginationClick.bind(this);
  }
  
  async getPostsByUserId(id) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/?userId=${id}`);
    const posts    = await response.json();
    
    return posts;
  }
  
  onPaginationClick(id) {
    this.getPostsByUserId(id).then(posts => {
      this.setState({...this.state, posts: posts});
    })
  }
  
  render() {
    return (
        <Container fluid>
          <br/>
          <h1>This content is Static</h1>
          <br/>
  
          <Pagination>
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            {Array.from(Array(10).keys()).map(index => {
              return (
                  <PaginationItem key={index}>
                  <PaginationLink href="#" onClick={() => this.onPaginationClick(index + 1)}>
                    {index + 1}
                  </PaginationLink>
            </PaginationItem>
              );
            })}
          </Pagination>
  
          <br/>
          
          {this.state.posts.map(post => {
            return (
                <Row key={post.id}>
                  <Col>
                    <Card>
                      <CardBody>
                        <CardTitle>{post.title}</CardTitle>
                        <CardText>{post.body}</CardText>
                        <Link to={`/app/posts/${post.paginatedPostsId || post.id}`}>app</Link>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
            );
          })}
        </Container>
    );
  }
}

export const query = graphql`
  query BlogPaginationQuery {
    allPaginatedPostsPost{
      edges {
        node {
          paginatedPostsId
          id
          userId
          title
          body
        }
      }
    }
  }
`;