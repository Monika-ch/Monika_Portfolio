import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import {Link } from 'react-router-dom';
import "../styled-components/NavigationBar.css";

class NavigationBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isNavOpen: false,
  //   };
  // }
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }
  render() {
    return (
      <>
        <div className='logo-container'>
          <h1 className='logo'><a href="/#story">൩</a></h1>
        </div >
        <Navbar sticky='top' expand='md' className='navBar'>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className='m-auto list-unstyled'>
              <NavItem>
                <NavLink className='nav_link active' tag={Link} to='/'>
                  My Story
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav_link' tag={Link} to='/whatIdo'>
                  What I Do
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink className='nav_link' tag={Link} to='/projects'>
                  Project Gallery
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className='nav_link' tag={Link} to='/contact'>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavigationBar;
