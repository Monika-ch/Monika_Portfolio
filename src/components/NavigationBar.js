import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  NavItem,
  NavLink,
  Collapse,
} from "reactstrap";
import { Link } from 'react-router-dom';
import "../styled-components/NavigationBar.css";


class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      activeId: 1,  // Initial state for the active tab
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  handleClick(e, id) {
    this.setState({ activeId: id });
  }

  render() {
    const navItems = [
      { id: 1, path: '/', title: 'My Story' },
      { id: 2, path: '/whatIdo', title: 'What I Do' },
      { id: 3, path: '/contact', title: 'Contact' },
    ];

    return (
      <>
        <div className='logo-container'>
          <h1 className='logo'><a href="/">൩</a></h1>
        </div>
        <Navbar expand='md' className='navBar' color="light" light>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="mr-auto" navbar>
              {navItems.map((item) => (
                <NavItem key={item.id}>
                  <NavLink
                    className={`nav_link ${this.state.activeId === item.id ? 'active' : ''}`}
                    onClick={(e) => this.handleClick(e, item.id)}
                    tag={Link}
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavigationBar;
