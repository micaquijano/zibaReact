import { Footer } from "./Footer";
import { Main } from "./Main";
import { NavBar } from "./NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import { MoneyProvider } from "../context/money";

const App = () => {
  return (
    <MoneyProvider>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </MoneyProvider>
  );
};
export default App;
