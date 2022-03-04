import './App.css';
import { useState } from 'react'
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
function App() {
  const [count, setCount] = useState(0);
  const toAdd = (val) => setCount(val)
  return (
    <div className="App">
      <NavBar itemsCount={count} />
      <ItemListContainer itemsCount={count} toAdd={toAdd} />
    </div>
  );
}

export default App;
