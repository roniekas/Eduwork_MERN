import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Forem() {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-5">
        <h4 className="mt-3 mb-3 text-center">Give Me a Feedback!</h4>
          <Col md="7">
            <h6 className="form-label">Alamat Email : </h6>
          <FloatingLabel controlId="floatingInput" className="mb-3" >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
            <h6 className="form-label">Comments : </h6>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
          <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '200px' }} />
          </FloatingLabel>
          </Col>
        </Row>
      </Container>
      
    </>
  );
}

export default Forem;