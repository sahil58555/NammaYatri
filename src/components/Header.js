import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CabLogo from "../assets/img/namma_logo.jpeg";

const useStyles = makeStyles((theme) => ({
  logo: {
    marginRight: theme.spacing(1),
    height: 36,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={CabLogo} alt="Cab Logo" className={classes.logo} />
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Typography variant="h6" className={classes.title}>
            Namma Yatri
          </Typography>
        </Link>
        <Link to="/" style={{ color: "white", paddingLeft: "20px" }}>
          <Button color="inherit">Home</Button>
        </Link>
        <Link to="/about" style={{ color: "white" }}>
          <Button color="inherit">About Us</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
