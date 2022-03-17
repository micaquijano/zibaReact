import { Footer } from "./Footer"
import { Main } from "./Main"
import { NavBar } from "./NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from "./Item";
import { ToastContainer } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";



const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Main /> 
            <Item/>
            <Footer />
            <ToastContainer/>
        </BrowserRouter>
    )
}
export default App