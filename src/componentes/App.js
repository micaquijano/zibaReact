import { Footer } from "./Footer";
import { Main } from "./Main";
import { NavBar } from "./NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (

    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
    </BrowserRouter>
    
  );
}; 
export default App;
