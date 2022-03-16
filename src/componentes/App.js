import { Footer } from "./Footer"
import { Main } from "./Main"
import { NavBar } from "./NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from "./Item";


const App = () => {
    return (
        <>
            <NavBar />
            <Main />
            <Item/>
            <Footer />
        </>
    )
}
export default App