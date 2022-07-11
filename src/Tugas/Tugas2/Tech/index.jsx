import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';

function Tech() {
  return (
    <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md="8">
            <h4 className="mt-3 mb-3 text-center">Tech that i used</h4>
          <Table striped bordered hover variant="success">
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Version</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>HTML</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>CSS</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Bootstrap</td>
                    <td>5.2</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>MySQL</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>JavaScript</td>
                    <td>1.8.5</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>PHP</td>
                    <td>8.0</td>
                </tr>
            </tbody>
            </Table>
          </Col>
        </Row>
    </Container>
  );
}

export default Tech;