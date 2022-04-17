import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLinks from '../CustomLinks/CustomLinks';
import auth from './../../firebase.init';
import './Header.css'

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
            <CustomLinks to="/home">Home</CustomLinks>
            <CustomLinks to="/services">Services</CustomLinks>
            <CustomLinks  to='/blogs'>Blogs</CustomLinks>
            <CustomLinks to="/aboutme">About Me</CustomLinks>
            {!user? <CustomLinks className="login-btn rounded"  to="/login">Login</CustomLinks>:
            <button className="btn btn-link text-danger text-decoration-none" onClick={handleSignOut}>Sign Out</button>
            }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;