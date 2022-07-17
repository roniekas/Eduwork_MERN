import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navbar1 extends React.Component {
    render() {
        return (
            <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="./logo192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top me-3"
                    />
                    Republika Studio
                </Navbar.Brand>
                <Nav>
                    <Nav.Link eventKey={2} href="#register">
                    Login
                    </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
            </>
            )
        }
}

export default Navbar1;