import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export const Item = ({ id, descripcion, precio, nombre }) => {
  return (
    <Col>
      <Card style={{ minHeight: '100%' }}>
        <Card.Img variant="top" src={''} onError={(e) => (
          (e.target.src =
            "https://tiendadeco.netlify.app/img/LogoTiendaDeco.jpg")
        )
        } style={{ height: 310, objectFit: 'cover' }} />
        <Card.Body style={{ minHeight: '180px' }}>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>${precio}</ListGroup.Item>
          <ListGroup.Item><Link to={`/Item/${id}`}>Detail</Link></ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
