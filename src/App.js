import "./App.css";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";
import { Container } from "@mui/material";
import { Header } from "./components/materialUI/Header";
import { Footer } from "./components/materialUI/Footer";
import flag from "./assets/flag.mp4";
import LoginIcon from "@mui/icons-material/Login";

function App() {
  const [count, setCount] = useState(0);
  const toAdd = (val) => setCount(val);

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        transitionDuration={{ appear: 0, enter: 0, exit: 3000 }}
        open={open}
      >
        <video
          autoPlay
          muted
          loop
          src={flag}
          style={{ position: "absolute", width: "100%", heigh: "100%" }}
        />
        <LoginIcon
          onClick={handleClose}
          style={{
            position: "absolute",
            fontSize: "5rem",
            cursor: "pointer",
            zIndex: (theme) => theme.zIndex.drawer + 3,
          }}
        />
      </Backdrop>
      <video className="video-parallax" autoPlay muted loop src={flag} />
      <div className="App">
        <Header itemsCount={count} sound={!open} />
        <Container style={{ minHeight: "500px" }}>
          <ItemListContainer itemsCount={count} toAdd={toAdd} />
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
