import { Card, Button, Row, Col, } from "react-bootstrap"
import { Link } from "react-router-dom"
export const Item = () => {
  return (
    <Row xs={1} md={2} className="g-4">
  {Array.from({ length: 2 }).map((_, idx) => (
    <Col>
      <Card className="card">
        <Card.Img className="img" variant="top" src="https://www.dhresource.com/0x0/f2/albu/g9/M00/AB/AB/rBVaWF6ZeUOACvfmAAE3pWJ3kGM967.jpg/tights-fashion-female-clothing-cartoon-cat.jpg" />
        <Card.Body>
          <Card.Title><h1>$1200</h1></Card.Title>
          <Card.Text>
            Medias Sailor Moon
          </Card.Text>
          <Button variant="outline-dark">Comprar</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
  )

}