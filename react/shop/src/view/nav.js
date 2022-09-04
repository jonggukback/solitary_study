import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Head(props) {

    let navigate = useNavigate();

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
                        <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export { Head }