import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Bio() {
  return (
    <Container>
      <Row className="text-center mt-5">
        <Col>
          <h2 className="display-5 mb-5"><strong>My Experience</strong></h2>
          <p className="jus mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum iste exercitationem inventore libero eos et, fugit hic? Quam, repellat omnis similique in soluta laboriosam cumque vitae earum iusto excepturi repellendus dolores beatae optio culpa quae ut corrupti voluptatibus aut quasi et vel? Aut nisi excepturi fugit iusto, maiores perspiciatis rem quis rerum. Dolorum minima veritatis temporibus? Unde nihil facere, beatae quos reiciendis aperiam iste? Qui, suscipit? Facere delectus fugiat dolor aliquam ex impedit similique ducimus. Officiis cupiditate iste voluptatum totam ratione laudantium accusamus odit maxime accusantium, perferendis numquam doloribus? Praesentium culpa adipisci quis fuga, veniam quasi ratione inventore voluptates aperiam!
          </p>
        </Col>
        <Col>
          <h2 className="display-5 mb-5"><strong>My Biography</strong></h2>
          <p className="jus mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum iste exercitationem inventore libero eos et, fugit hic? Quam, repellat omnis similique in soluta laboriosam cumque vitae earum iusto excepturi repellendus dolores beatae optio culpa quae ut corrupti voluptatibus aut quasi et vel? Aut nisi excepturi fugit iusto, maiores perspiciatis rem quis rerum. Dolorum minima veritatis temporibus? Unde nihil facere, beatae quos reiciendis aperiam iste? Qui, suscipit? Facere delectus fugiat dolor aliquam ex impedit similique ducimus. Officiis cupiditate iste voluptatum totam ratione laudantium accusamus odit maxime accusantium, perferendis numquam doloribus? Praesentium culpa adipisci quis fuga, veniam quasi ratione inventore voluptates aperiam!
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Bio;