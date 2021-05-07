import React from 'react'
import {Navbar, Nav, Button, Form, FormControl, NavDropdown,Row , Container} from 'react-bootstrap'

const NavBar = () => {

    return (
        <Container fluid>
            <Row className='p-2 align-items-center'>
                <Navbar.Brand href="#home" className='dark-blue navbar-brand col-md-3'>
                    <h1 className='blue-text pro-force'>PRO<span className ='orange-text'>FORCE</span></h1>
                    <h2 className='blue-text hiring-solutions'>HIRING SOLUTIONS</h2>
                </Navbar.Brand>
                    <Nav className="mx-auto col-md-5 p-1 mx-auto">
                        <NavDropdown title={<p className='blue-text find-a-job'>Find a Job</p>} className='basic-nav-dropdown p-1'>
                            <NavDropdown.Item href="#action/3.1">Matt</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">McKenna</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Made This</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<p className='blue-text hire-workers'>Hire Workers</p>} className='basic-nav-dropdown p-1'>
                            <NavDropdown.Item href="#action/3.1">Using React</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bootstrap</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">SASS</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <span className=' col-md-2  right-100'>
                        <a className='blue-text locations p-1 d-inline'>Locations</a>
                        <Button className='contact-btn p-1 d-inline '>Contact Us</Button>
                    </span>
                </Row>
        </Container>
    )
}

export default NavBar