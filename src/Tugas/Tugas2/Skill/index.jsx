import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Skill() {
  return (
    <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md="5">
          <ListGroup as="ol" numbered>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">HTML 5</div>
              </div>
              <Badge bg="primary" pill>
                90%
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">CSS 3</div>
              </div>
              <Badge bg="primary" pill>
                90%
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Bootstrap 5.2</div>
              </div>
              <Badge bg="primary" pill>
                90%
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">MySQL</div>
              </div>
              <Badge bg="primary" pill>
                90%
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">JavaScript</div>
              </div>
              <Badge bg="primary" pill>
                90%
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">PHP</div>
              </div>
              <Badge bg="primary" pill>
                90%
              </Badge>
            </ListGroup.Item>
          </ListGroup>
          </Col>
        </Row>
    </Container>
  );
}

export default Skill;