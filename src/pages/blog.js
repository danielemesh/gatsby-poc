import React, {Component} from 'react';
import {
  CardText, CardTitle, Container, Row, Card, CardBody,
  Col,
} from 'reactstrap';

export default class Blog extends Component {
  
  constructor({data}) {
    super();
    
    this.state = {
      posts: data.dataJson.posts,
    };
    
  }
  
  render() {
    return (
        <Container fluid>
          <br/>
          <h1>This content is Static</h1>
          <br/>
          
          {this.state.posts.map(post => {
            return (
                <Row key={post.id}>
                  <Col>
                    <Card>
                      <CardBody>
                        <CardTitle>{post.title}</CardTitle>
                        <CardText>{post.body}</CardText>
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
  query BlogQuery {
    dataJson {
      posts {
        id
        title
        body
      }
    }
  }
`;