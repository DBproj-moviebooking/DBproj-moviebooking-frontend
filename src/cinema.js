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
import Checkbox from '@material-ui/core/Checkbox';
import Header from "./utils/Header";
import { bgcolor } from "@material-ui/system";
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
  seatScreen: {
    height: "5vh",
    marginTop: theme.spacing(1),
    backgroundColor: bgColors.Grey,
    color:"white",
    textAlign:"center"
  },
  seatRow: {
    height: "6vh",
    marginTop: theme.spacing(1),
    backgroundColor: bgColors.Mintgreen,
    color:"white",
    textAlign:"center",
  },
  seatCol: {
    backgroundColor:"white",
    textAlign:"center",
    justifyContent: "space-between"
  },
  seatButton: {
    marginTop: theme.spacing(1),
    backgroundColor: "white",
    alignItems: "center",
    position: "relative",
    justifyContent: "space-between"
  },
  seatColNav: {
    height: Button.size,
    marginTop: theme.spacing(4),
    backgroundColor: bgColors.Mintgreen,
    color:"white",
    textAlign:"center",
    justifyContent: "space-between"
  },
  mainButton: {
    width: "10vh",
    fontWeight: "Bold",
    backgroundColor: bgColors.Ltgreen,
    color: "white",
    justify: 'space-between',
    display:'space-between',
  },
  mainCanvas: {
    flexGrow: 1,
    backgroundColor: "white",
    marginTop: theme.spacing(5),
    padding: theme.spacing(2, 2),
    justifyContent: 'center',
    alignItems: 'center'
  },
  paperImage: {
    backgroundImage: `url(${"./Ryan_Gosling.jpg"})`,
    backgroundSize: "cover",
    height: "30vh",
    position: "relative",
    margin: ".5vh"
  },
  paperDetail: {
    backgroundColor: "red",
    height: "50vh",
    position: "relative",
    margin: "5px"
  },
  paperDay: {
    backgroundColor: "white",
    flexGrow: 1,
    height: "5vh",
    position: "relative",
    margin: ".5vh"
  },
  paperTitle: {
    backgroundColor: "white",
    height: "10vh",
    postiotion: "relative",
    margin: ".5vh",
    padding: "2vh",
    fontSize: "4vh",
    fontWeight: "Bold"
  },
  paperTheatre: {
    backgroundColor: "white",
    height: "8vh",
    position: "relative",
    margin: ".5vh",
    fontWeight: "Medium",
    fontSize: "2.5vh",
    padding: "2vh"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}));

const sections = ["Homepage", "Movies", "Cinemas", "Souvenirs"];
const link = ["/", "/movie", "/cinema", "/souvenir"];
const buttons = [
  { label: "Homepage", path: "/homepage" },
  { label: "Movies", path: "/movie" },
  { label: "Cinemas", path: "/cinema" },
  { label: "Souvenirs", path: "/souvenir" }
];

export default function Blog() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    bookedA1: true,
    bookedB1: true,
    bookedC1: false,
    bookedD1: false,
    bookedE1: false,

    checkedA1: true,
    checkedB1: true,
    checkedC1: false,
    checkedD1: false,
    checkedE1: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]:event.target.checked});
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
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
        <main>
          <Paper className={classes.mainCanvas}>
          <Grid
                container
                style={{ Height: "30vh", marginBottom: "2vh"}}
                className={classes.cinema}
              >
                <Grid item xs={3}>
                  <Paper className={classes.paperImage}></Paper>
                </Grid>
                <Grid item xs={9}>
                  <Paper className={classes.paperTitle}>Avenger</Paper>
                  <Paper className={classes.paperTheatre}>Theatre 1</Paper>
                  <Paper className={classes.paperTheatre}>8:00-10:20</Paper>
                </Grid>
              </Grid>
          </Paper>
          <Paper className={classes.mainCanvas}>
          <Grid
                container
                className={classes.cinema}
                style={{ Height: "30vh", marginBottom: "2vh", alignItems:"space-around", flexGrow:1, justify:"flex-end"}}
              >
                <Grid item xs={12}>
                  <Paper className = {classes.seatScreen}>Screen</Paper>
                </Grid>
                  
                <Grid item xs={1}>
                    <Card className = {classes.seatRow}></Card>
                    <Card className = {classes.seatColNav}>A</Card>
                    <Card className = {classes.seatColNav}>B</Card>
                    <Card className = {classes.seatColNav}>C</Card>
                    <Card className = {classes.seatColNav}>D</Card>
                    <Card className = {classes.seatColNav}>E</Card>
                </Grid>
                <Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>1</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid>
                <Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>2</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid>
                <Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>3</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid>
                <Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>4</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid>
                <Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>5</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid>
                <Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>6</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid>
                <Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>7</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid><Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>8</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid>
                <Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>9</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid>
                <Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>10</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid>
                <Grid item xs={1}>
                <Container className = {classes.seatCol}>
                  <Card className = {classes.seatRow}>11</Card>
                  <FormControlLabel disabled={state.bookedA1} control={<Checkbox checked={state.checkedA1} onChange={handleChange('checkedA1')} value="checkedA1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedB1} control={<Checkbox checked={state.checkedB1} onChange={handleChange('checkedB1')} value="checkedB1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedC1} control={<Checkbox checked={state.checkedC1} onChange={handleChange('checkedC1')} value="checkedC1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedD1} control={<Checkbox checked={state.checkedD1} onChange={handleChange('checkedD1')} value="checkedD1" className = {classes.seatButton}/>}/>
                  <FormControlLabel disabled={state.bookedE1} control={<Checkbox checked={state.checkedE1} onChange={handleChange('checkedE1')} value="checkedE1" className = {classes.seatButton}/>}/>
                  </Container>
                </Grid>
                
              </Grid>
              <Grid container justify="space-around">
              <Button
                variant="contained"
                justify="space-around"
                className={classes.mainButton}
              >
                Book
              </Button>
            </Grid>
          </Paper>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
