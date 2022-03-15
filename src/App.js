import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Container } from '@mui/material';
import { Header } from './components/materialUI/Header';
import { Footer } from './components/materialUI/Footer';

function App() {
  const [count, setCount] = useState(0);
  const toAdd = (val) => setCount(val)
  return (
    <div className="App">
      {/* <NavBar itemsCount={count} /> */}
      <Header itemsCount={count}/>
      <Container style={{ minHeight: "500px" }}>
      <ItemListContainer itemsCount={count} toAdd={toAdd} />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
