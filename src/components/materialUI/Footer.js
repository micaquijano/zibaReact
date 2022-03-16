import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material/";

import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import StarBorder from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Footer = () => (
  <div style={{ backgroundColor: "rgba(255, 0, 0, 0.856)", marginTop: 50 }}>
    <Container>
      <Grid
        container
        justify="center"
        style={{ minHeight: "212px", paddingTop: 25, paddingBottom: 25 }}
      >
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={6}>
            <Typography variant="h6">в ходе выполнения</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="продукты" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="категории" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6">вскоре</Typography>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Контакт" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <FavoriteIcon />
                  </ListItemIcon>
                  <ListItemText primary="пропустите меня" />
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    <AppBar
      position="static"
      elevation={0}
      component="footer"
      style={{ backgroundColor: "#D52B1E" }}
    >
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="h6">Valakax © 2022</Typography>
      </Toolbar>
    </AppBar>
  </div>
);
