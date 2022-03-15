import { Footer } from "./Footer"
import { Main } from "./Main"
import { NavBar } from "./NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    return (
        <>
            <NavBar />
            <Main name="roberto" />
            <Footer />
        </>
    )
}
export default App