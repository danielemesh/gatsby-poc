import React, {Component} from 'react';
import Link from 'gatsby-link';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Collapse, Nav, Navbar,
  NavbarToggler,
  NavItem,
} from 'reactstrap';
import logo from './att-logo.png';
import styles from './index.module.scss';

export default class IndexLayout extends Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    
    this.state = {
      isOpen: false,
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  
  render() {
    return (
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarToggler onClick={this.toggle} className="mr-2"/>
            <div className="navbar-brand">
              <Link to="/">
                <img className={styles['navbar-logo']} src={logo} alt="Logo"/>
              </Link>
            </div>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <div className="nav-link">
                    <Link to="/about">About</Link>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="nav-link">
                    <Link to="/blog">Blog</Link>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="nav-link">
                    <Link to="/blog-with-fetch">Blog w/Fetch</Link>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="nav-link">
                    <Link to="/blog-dynamic">Blog w/MD Files</Link>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="nav-link">
                    <Link to="/blog-pagination">Blog w/Pagination</Link>
                  </div>
                </NavItem>
                <NavItem>
                  <div className="nav-link">
                    <Link to="/app">Client App</Link>
                  </div>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          
          <div>
            {this.props.children()}
          </div>
        
        </div>
    );
  }
}