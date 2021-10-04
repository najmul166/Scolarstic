import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link ,NavLink} from 'react-router-dom';
import  './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href=''>Scolarstic</Navbar.Brand>
    <Link >
      <NavLink to="/home" className='navver' activeStyle={{
    fontWeight: "bold",
    color: "red",
  }}>Home</NavLink>
      <NavLink to="/about" className='navver' activeStyle={{
    fontWeight: "bold",
    color: "red",
  }}>About</NavLink>
      <NavLink to="/services" className='navver' activeStyle={{
    fontWeight: "bold",
    color: "red",
  }}>Service</NavLink>
      <NavLink to="/registration" className='navver'  activeStyle={{
    fontWeight: "bold",
    color: "red",
  }}>Registration</NavLink>
    </Link>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;