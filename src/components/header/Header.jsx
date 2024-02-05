import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"
import { MdTravelExplore } from "react-icons/md";

function Header() {
  return (
    <header className='fixed-header'>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><MdTravelExplore />OceanBooking</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#package">Package</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#pages">Pages</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <button className='button' >Book Now</button>
            <button className='button' >Đăng ký cho thuê nhà</button>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </header>
  )
}

export default Header