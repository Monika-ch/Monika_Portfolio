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
import "../styled-components/Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className='logo-container'>
          <h1 className='logo'>൩</h1>
        </div>
        <Navbar sticky='top' expand='md' className='navBar'>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className='m-auto list-unstyled'>
              {/* <NavItem>
                <NavLink>
                  <img src={logo} alt='planets' className='logo inline-block' />
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className='nav_link active' to='/story'>
                  My Story
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav_link gallery_btn' to='/story'>
                  Project Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav_link' to='/roadmap'>
                  Achievements
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav_link' to='/game-mechanics'>
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className='nav_link' to='/faq'>
                  FAQ
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
