import React from 'react';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    
    console.log('Post: ', props);
    
    this.state = {
      post: {}
    };
  }
  
  componentDidMount() {
    this.fetchPost(this.props.match.params.id).then(post => {
      this.setState({...this.state, post});
    });
  }
  
  async fetchPost(id) {
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
    return await response.json();
  }
  
  render() {
    return (
        <div>
          <h3>{this.state.post.title}</h3>
          <p>{this.state.post.body}</p>
        </div>
    );
  }
}