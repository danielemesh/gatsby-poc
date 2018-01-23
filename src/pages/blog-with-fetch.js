import React, {Component} from 'react';
import {
  CardText, CardTitle, Container, Row, Card, CardBody,
  Col,
} from 'reactstrap';

export default class Blog extends Component {
  
  constructor() {
    super();
    
    this.state = {
      posts: [],
    };
    
    this.fetchData = this.fetchData.bind(this);
  }
  
  componentDidMount() {
    this.fetchData();
  }
  
  fetchData() {
    fetch('http://jsonplaceholder.typicode.com/posts/?userId=1').then(res => {
      return res.json();
    }).then(result => {
      this.setState({posts: result});
    });
  }
  
  render() {
    return (
        <Container fluid>
          <br/>
          <h1>This content is loaded at run time with Fetch</h1>
          <br/>
          
          {this.state.posts.map(post => {
            return (
                <div key={post.id}>
                  <Row>
                    <Col>
                      <Card>
                        <CardBody>
                          <CardTitle>{post.title}</CardTitle>
                          <CardText>{post.body}</CardText>
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
}