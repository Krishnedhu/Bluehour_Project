import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Navcmp() {
  return (
      <Navbar bg="primary" variant="light">
      <Container>
      <Navbar.Brand href="/" className='text-light'>USER LIST</Navbar.Brand>
      <Nav className="me-auto">
      </Nav>
      </Container>
      <Link to ="/UserForm">
      <Button variant="outline-primary" className='me-5 text-light'>ADD USER</Button>
      </Link>     
      </Navbar>
  )
}

export default Navcmp