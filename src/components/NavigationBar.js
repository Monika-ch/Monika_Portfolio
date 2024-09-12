import React, { useState, useRef, useEffect } from "react";
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

const NavigationBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeId, setActiveId] = useState(1);
  const navbarRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClick = (e, id) => {
    e.stopPropagation(); // Prevent click from bubbling up to the document
    setActiveId(id);
    setIsNavOpen(false); // Collapse after a link is clicked
  };

  const handleDocumentClick = (event) => {
    if (isNavOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleDocumentClick);
    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, [isNavOpen]);

  const navItems = [
    { id: 1, path: '/', title: 'My Story' },
    { id: 2, path: '/whatIdo', title: 'What I Do' },
    { id: 3, path: '/contact', title: 'Contact' },
  ];

  return (
    <div id="NavLogoContainer" ref={navbarRef}>
      <div className='logo-container'>
        <h1 className='logo'><a href="/">൩</a></h1>
      </div>
      <Navbar expand='md' className='navBar' color="light" light>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav className="mr-auto" navbar>
            {navItems.map((item) => (
              <NavItem key={item.id}>
                <NavLink
                  className={`nav_link ${activeId === item.id ? 'active' : ''}`}
                  onClick={(e) => handleClick(e, item.id)}
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

export default NavigationBar;