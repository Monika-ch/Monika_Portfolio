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
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.navbarRef = React.createRef();  // Reference to the navbar
  }

  componentDidMount() {
    // Listen for clicks anywhere in the document
    document.addEventListener('click', this.handleDocumentClick);
  }

  componentWillUnmount() {
    // Clean up the event listener when the component unmounts
    document.removeEventListener('click', this.handleDocumentClick);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  handleClick(e, id) {
    e.stopPropagation(); // Prevent click from bubbling up to the document
    // Collapse the nav menu on link click and click outside the navbar
    this.setState({
      activeId: id,
      isNavOpen: false, // Collapse after a link is clicked
    });
  }

  handleDocumentClick(event) {
    // If the click is outside the navbar, collapse the menu
    if (this.state.isNavOpen && this.navbarRef.current && !this.navbarRef.current.contains(event.target)) {
      this.setState({
        isNavOpen: false,
      });
    }
  }

  render() {
    const navItems = [
      { id: 1, path: '/', title: 'My Story' },
      { id: 2, path: '/whatIdo', title: 'What I Do' },
      { id: 3, path: '/contact', title: 'Contact' },
    ];

    return (
      <div id="NavLogoContainer" ref={this.navbarRef}>
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
      </div>
    );
  }
}

export default NavigationBar;
