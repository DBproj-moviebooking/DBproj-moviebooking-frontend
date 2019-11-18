import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";
import Markdown from "./Markdown";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const bgColors = {
  Grey: "#747474",
  Ltgreen: "#65CCB8",
  Mintgreen: "#57BA98",
  Green: "#3B945E",
  White: "#F2F2F2",
  Yellow: "#F6BB42"
};

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: bgColors.Grey
  },
  toolbarTitle: {
    flex: 1,
    backgroundColor: bgColors.Grey
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
    backgroundColor: bgColors.Grey
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(/Black_Panther.jpg)",
    height: "500px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing(3),
    backgroundColor: bgColors.Grey
  },
  card: {
    display: "flex",
    backgroundColor: bgColors.Grey,
    color: bgColors.White
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing(3)
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

const sections = ["Homepage", "Movies", "Cinemas", "Souvenirs"];
const link = ["/homepage", "/movie", "/cinema", "/souvenir"];
const buttons = [
  { label: "Homepage", path: "./" },
  { label: "Movies", path: "/movies" },
  { label: "Cinemas", path: "/cinema" },
  { label: "Souvenirs", path: "/souvenir" }
];

const featuredPosts = [
  {
    title: "Top news",
    date: "Nov 12",
    description:
      "Check out Ryan Gosling evolution since 2004 til today. Did you know that He is Canadian?",
    image: "./Ryan_Gosling.jpg"
  },
  {
    title: "Indy Movies",
    date: "Feb 14",
    description:
      "Here comes the era of Indy Movies. Checkout Inside Llewyn Davis.",
    image: "./Inside_Llewyn_Davis.jpg"
  }
];

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small" style={{ color: bgColors.White }}>
          Write a Review
        </Button>
        <Typography
          style={{
            color: bgColors.White /*, backgroundColor: bgColors.Mintgreen*/
          }}
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Minor Cineplex
        </Typography>
        <IconButton>
          <SearchIcon style={{ color: bgColors.White }} />
        </IconButton>
        <Button
          variant="outlined"
          size="small"
          style={{
            color: bgColors.White,
            backgroundColor: bgColors.Mintgreen
          }}
          href="./Signup"
        >
          Sign up
        </Button>
        <Button
          variant="outlined"
          size="small"
          style={{
            color: bgColors.White,
            backgroundColor: bgColors.Mintgreen
          }}
          href="./Signin"
        >
          Login
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {buttons.map(({ label, path }) => (
          <Link
            style={{ color: bgColors.White }}
            color="inherit"
            noWrap
            key={label}
            variant="body2"
            href={path}
            className={classes.toolbarLink}
          >
            {label}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}
