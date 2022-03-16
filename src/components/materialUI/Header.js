import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import russia from "../../assets/russia.png";
import himno from "../../assets/imno.mp3";
import { Currencies } from "../Currencies";
import { CartWidget } from "../CartWidget";

const pages = ["продукты", "категории", "Контакт"];
const settings = ["профиль", "Счет", "Выйти"];

export const Header = ({ itemsCount, sound }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [audio] = React.useState(new Audio(himno));
  const [playing, setPlaying] = React.useState(false);

  const toggle = () => setPlaying(!playing);

  React.useEffect(() => {
    setPlaying(sound);
  }, [sound]);

  React.useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  React.useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{ backgroundColor: "rgb(221, 219, 219, 0.85)" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <img width={50} src={russia} />
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img width={50} src={russia} />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <IconButton onClick={toggle} sx={{ p: 2 }}>
              {playing ? <VolumeUpIcon /> : <VolumeOffIcon />}
            </IconButton>
            <Currencies />
            <CartWidget itemsCount={itemsCount} />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
