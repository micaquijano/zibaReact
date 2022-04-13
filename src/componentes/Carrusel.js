import { Carousel, Container } from "react-bootstrap"

export const Carrusel = () => {
  return (
    <>
  <Container className="Carousel">
<Carousel variant="dark">
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://http2.mlstatic.com/D_NQ_NP_673780-MLA48485019598_122021-O.jpg"
    alt="First slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://m.media-amazon.com/images/I/616vgKe8v-L._AC_SX466_.jpg"
    alt="Second slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="d-block w-100"
    src="https://img.bestdealplus.com/ae04/kf/H93fcf973add8414c95870635058816776.jpg"
    alt="Third slide"
  />
</Carousel.Item>
</Carousel>
</Container>
</>
  )
}
