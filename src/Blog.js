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
import Header from "./Header";
import { TextareaAutosize } from "@material-ui/core";

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
  },
  Header: {}
}));

const sections = ["Homepage", "Movies", "Cinemas", "Souvenirs"];
const link = ["/", "/movie", "/cinema", "/souvenir"];
const buttons = [
  { label: "Homepage", path: "/homepage" },
  { label: "Movies", path: "/movie" },
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

const posts = ["Paragon Cineplex", "House RCA", "Central World SF Cinema"];

const archives = [
  "March 2020",
  "February 2020",
  "January 2020",
  "December 2019",
  "November 2019",
  "October 2019",
  "September 2019",
  "August 2019",
  "July 2019",
  "June 2019",
  "May 2019",
  "April 2019"
];

const social = ["GitHub", "Twitter", "Facebook"];

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Header /> 
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: "none" }}
                src="./Black_Panther.jpg"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Minor Cineplex Spotlight
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    New Release of Movie from Marvel! Black Panther is in
                    Theatres now!!
                  </Typography>
                  <Link
                    variant="subtitle1"
                    href="#"
                    style={{ color: bgColors.LtGreen }}
                  >
                    Continue reading…
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4}>
            {featuredPosts.map(({ title, date, description, image }) => (
              <Grid item key={title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {description}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          style={{ color: bgColors.Ltgreen }}
                        >
                          Continue reading...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image={image}
                        title={title}
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ color: bgColors.White }}
              >
                Cinema Near you
              </Typography>
              <Divider />
              {posts.map(post => (
                <Markdown
                  className={classes.markdown}
                  key={post.substring(0, 40)}
                >
                  {post}
                </Markdown>
              ))}
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Typography>
                  Minor Cineplex is an online database of information related to
                  movie ticket. Allow you to purchase movie ticket, buy movie
                  souvenirs, locate cinema nearby, and write a movie review. All
                  online!
                </Typography>
              </Paper>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.sidebarSection}
              >
                Archives
              </Typography>
              {archives.map(archive => (
                <Link
                  display="block"
                  variant="body1"
                  href="#"
                  key={archive}
                  style={{ color: bgColors.Ltgreen }}
                >
                  {archive}
                </Link>
              ))}
              <Typography
                variant="h6"
                gutterBottom
                className={classes.sidebarSection}
              >
                Social
              </Typography>
              {social.map(network => (
                <Link
                  display="block"
                  variant="body1"
                  href="#"
                  key={network}
                  style={{ color: bgColors.Ltgreen }}
                >
                  {network}
                </Link>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
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
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
