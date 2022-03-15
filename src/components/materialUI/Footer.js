import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid,
  Link,
} from "@mui/material/";

export const Footer = () => (
  <div style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
    <Container >
      <Grid container justify="center" style={{ minHeight: "212px" }}>
        <Grid container spacing={2} justify="space-between">
          <Grid item xs={6}>
            <Typography paragraph>
              The donations made on this site are sent through a secured
              connection and processed by Stripe. This site is compliant with
              the Payment Card Industry and Data Security Standard. Read more
              about Stripe security{" "}
              <Link
                href="https://stripe.com/docs/security/stripe"
                target="_blank"
                alt="Stripe"
              >
                here
              </Link>
              .
            </Typography>
          </Grid>
          <Grid item xs={6} >
            <Typography paragraph>
              This Web App is fully responsive. Made in{" "}
              <Link href="https://reactjs.org/" target="_blank">
                ReactJS
              </Link>
              , using{" "}
              <Link href="https://material-ui.com" target="_blank">
                Material-UI
              </Link>{" "}
              and{" "}
              <Link
                href="https://stripe.com/docs/stripe-js/react"
                target="_blank"
              >
                React Stripe
              </Link>
              . It's given free of use by{" "}
              <Link href="https://angeloron.com" target="_blank">
                Ange loron
              </Link>
              . react-material-ui-stripe-payment is under the MIT license and
              can be dowloaded{" "}
              <Link
                href="https://gitlab.com/angeloron/react-material-ui-stripe-payment"
                target="_blank"
              >
                here
              </Link>
              .
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    <AppBar position="static" elevation={0} component="footer" color="default">
      <Toolbar style={{ justifyContent: "center" }}>
        <Typography variant="caption">Valakax © 2022</Typography>
      </Toolbar>
    </AppBar>
  </div>
);
