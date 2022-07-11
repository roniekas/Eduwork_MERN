// @ts-nocheck
import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import "./index.css";

class Atas extends React.Component {

    render(){
        return(
            <Container fluid>
            <Row className="justify-content-md-center bg-primary">
                <Col md="auto text-center text-white ">
                    <h1 className="display-5 mb-5">Roni Eka Setiawan</h1>
                    <h2 className="mb-5 typewriter">Front End Web Developer</h2>
                    <div className="mb-5">
                        <button type="button" className="btn btn-outline-warning"> <a href="https://www.linkedin.com/in/roni-eka-setiawan-a8055921a/" className="link-light">View my Linkedin</a></button>
                    </div>
                </Col>
            </Row>
            </Container>
        )
    }

}

export default Atas;