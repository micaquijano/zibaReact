import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App';
import reportWebVitals from './reportWebVitals';
import './style.css'
import { Carousel, Container } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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

