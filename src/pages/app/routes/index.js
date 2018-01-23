import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from '../components/Home';
import ClientAbout from '../components/ClientAbout';
import Post from '../components/Post';


export default (props) => {
  console.log('Routes: ', props);
  
  return (
        <Switch>
          <Route path="/app/" exact component={Home} />} />
          <Route path="/app/posts/:id/" component={Post} />
          <Route path="/app/about/" render={ClientAbout} />
        </Switch>
  );
};