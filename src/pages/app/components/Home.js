import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
  console.log('Home: ', props);
  
  return (
      <div>
        <h1>Home</h1>
        <Link to="/app/about/">About</Link>
      </div>
  );
};