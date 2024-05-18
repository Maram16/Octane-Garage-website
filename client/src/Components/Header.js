import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import logo from "../Images/logo.png"; // Make sure the path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faCog, faUser } from '@fortawesome/free-solid-svg-icons';







const Header = () => {
  const [navClass, setNavClass] = useState('navbar-transparent');

  const listenScrollEvent = () => {
    if (window.scrollY > 200) {
      setNavClass('navbar-colored');
    } else {
      setNavClass('navbar-transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <div>
      <Navbar light expand="md" className={`custom-navbar ${navClass}`}>
        <Container fluid className="d-flex justify-content-between align-items-center">
          <NavbarBrand href="/" className="d-flex align-items-center">
            <img src={logo} alt="Octane Motor Garage" style={{ height: '70px', width: '180px' }} />
          </NavbarBrand>
          <Nav className="align-items-center" navbar>
          <NavItem>
              <NavLink href="/home" className="nav-link">
              <FontAwesomeIcon icon={faHome} />Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/services" className="nav-link">
            <FontAwesomeIcon icon={faCog} className="fa-icon" /> Services
            </NavLink>
            </NavItem>
 
            <NavItem>
              <NavLink href="/products" className="nav-link">
              <FontAwesomeIcon icon={faCar} />Car Parts
              </NavLink>
            </NavItem>
 
            <NavItem>
              <NavLink href="/userprofile" className="nav-link">
                <FontAwesomeIcon icon={faUser} className="fa-icon" /> User Profile
              </NavLink>
            </NavItem>
 
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
