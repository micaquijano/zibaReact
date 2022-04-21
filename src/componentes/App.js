import { Footer } from "./Footer";
import { Main } from "./Main";
import { NavBar } from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import { MainProvider } from "../context/mainProvider";

const App = () => {
  return (
    <MainProvider>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </MainProvider>
  );
};
export default App;
