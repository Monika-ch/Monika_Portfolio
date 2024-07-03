import React, { Component } from "react";
import {
  Navbar,
  // NavbarBrand,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import { Routes, Route, Link } from 'react-router-dom';
import "../styled-components/NavigationBar.css";
import HomePage from "./HomePage";

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
                <NavLink className='nav_link active' to='/#story'>
                  My Story
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav_link gallery_btn' to='/projects'>
                  Project Gallery
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink className='nav_link' to='/roadmap'>
                  Achievements
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className='nav_link' to='/game-mechanics'>
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav_link' to='/contact'>
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/#story" element={<HomePage />} /> */}
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </>
    );
  }
}

export default NavigationBar;
