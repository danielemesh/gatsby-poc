import React from 'react';
//import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
//import ClientAbout from './components/ClientAbout';


//if (typeof window !== 'undefined') {
  const Routes = require('./routes');
//}

export default (props) => <Routes {...props} />;

//export default (props) => (<Routes {...props} />);

//export default (props) => {
//  return (
//      <BrowserRouter>
//        <Switch>
//          <Route path="/app/" exact render={() => <Home {...props} />} />
//          <Route path="/app/posts/:id/" component={Post} />
//          <Route path="/app/about/" render={() => <ClientAbout />} />
//        </Switch>
//      </BrowserRouter>
//  );
//};


//const Home = (props) => {
//  return (
//      <div>
//        <h1>Home</h1>
//        <Link to="/app/about">About</Link>
//      </div>
//  );
//};

//class Post extends React.Component {
//  constructor(props) {
//    super(props);
//    console.log('post: ', props);
//
//    this.state = {
//      post: {}
//    };
//  }
//
//  componentDidMount() {
//    this.fetchPost(this.props.match.params.id).then(post => {
//      this.setState({...this.state, post});
//    });
//  }
//
//  async fetchPost(id) {
//    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
//    return await response.json();
//  }
//
//  render() {
//    return (
//        <div>
//          <h3>{this.state.post.title}</h3>
//          <p>{this.state.post.body}</p>
//        </div>
//    );
//  }
//}
