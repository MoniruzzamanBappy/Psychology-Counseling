import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth)
  }
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to='/home'>
            <img className="img-fluid pe-2" src='./brain.png' alt="" />
            Psychology Counseling
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} className="blogs-btn rounded" eventKey={2} to='/blogs'>
              Blogs
            </Nav.Link>
            {!user? <Nav.Link as={Link} to="/login">Login</Nav.Link>:
            <button className="btn btn-link text-danger text-decoration-none" onClick={handleSignOut}>Sign Out</button>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;