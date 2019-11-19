import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Blog from "./Blog";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import CardActionArea from "@material-ui/core/CardActionArea";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";
import Markdown from "./Markdown";
import post1 from "./blog-post.1.md";
import post2 from "./blog-post.2.md";
import post3 from "./blog-post.3.md";
import Header from "./Header";

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

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    //backgroundColor: '#000000',
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    //backgroundColor: '#000000',
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    //backgroundColor: '#000000',
    padding: theme.spacing(6)
  },
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
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const bgColors = {
  Grey: "#747474",
  Ltgreen: "#65CCB8",
  Mintgreen: "#57BA98",
  Green: "#3B945E",
  White: "#F2F2F2",
  Yellow: "#F6BB42"
};
const buttons = [
  { label: "Homepage", path: "./" },
  { label: "Movies", path: "/movies" },
  { label: "Cinemas", path: "/cinema" },
  { label: "Souvenirs", path: "/souvenir" }
];
const img_obj = [
  {
    title: "Tron Cup",
    image: "Tron_Movie_Cup.jpg",
    description: "Newest cup from movie Tron Legacy"
  },
  {
    title: "Avengers Model",
    image: "Avengers_Toy.jpg",
    description: "Newest models from movie Avengers: Endgame"
  },
  {
    title: "Lightsaber",
    image: "Lightsaber.jpg",
    description: "Newest sword from movie Star Wars"
  },
  {
    title: "Mad Max Game",
    image: "Mad_Max_Game.jpg",
    description: "Newest game from movie Mad Max: Fury Road"
  },
  {
    title: "The Martian Novel",
    image: "The_Martian_Book.jpg",
    description: "Newest novel from movie The Martian"
  },
  {
    title: "La La Land ",
    image: "Lalaland_Poster.jpg",
    description: "Newest poster from movie La La Land"
  },
  {
    title: "Avatar Poster",
    image: "Avatar_Poster.jpg",
    description: "Newest poster from movie Avatar"
  },
  {
    title: "Mjolnir Keychain",
    image: "Mjolnir.jpg",
    description: "Newest keychain from movie Thor"
  },
  {
    title: "Lego Movie Lego Set ",
    image: "Lego_Set.jpg",
    description: "Newest lego set from movie The Lego Movie"
  }
];

const img_list = ["Star_Wars.jpg", "Tron_Movie_Cup.jpg"];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Welcome to Minor Store!
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              We provide an online market just for "Movies Souvenirs" which you
              can purchase and we will delivery it right at your front door!
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ backgroundColor: bgColors.Mintgreen }}
                  >
                    Latest Collection
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    style={{ color: bgColors.Green }}
                  >
                    Outdated Collection
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {img_obj.map(({ title, image, description }) => (
              <Grid item key={title} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={image}
                    title={title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography>{description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      style={{ color: bgColors.Green }}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      size="small"
                      color="primary"
                      style={{ color: bgColors.Green }}
                    >
                      View Detail
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Online Movie Ticket Database
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          This website is created only for Database subject purpose. Not for
          profit.
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
