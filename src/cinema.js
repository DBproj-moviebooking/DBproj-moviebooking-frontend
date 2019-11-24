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
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
  seatConfirm: {
    width: "10vh",
    height: "10vh",
    margin:theme.spacing(1),
    backgroundColor: bgColors.White,
    color:"black",
    display: "flex",
    justifyContent: "center",
    textAlign:"center",
    flexGrow: 1
  },

  mainButton: {
    marginTop: theme.spacing(4),
    width: "40vh",
    height: "10vh",
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
    width: "20vh",
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

const buttons = [
  { label: "Homepage", path: "/homepage" },
  { label: "Movies", path: "/movie" },
  { label: "Cinemas", path: "/cinema" },
  { label: "Souvenirs", path: "/souvenir" }
];


export default function Blog() {
  const movieTitle = "Avenger";
  const movieTheatre = "3";
  const movieTime = "9:00";
  const numberOfCol = [1,2,3,4,5,6,7,8,9,10,11];
  const numberOfRow = ["A","B","C","D","E"];
  const classes = useStyles();
  const [state, setState] = React.useState({
    Seats: [
      {col:1,row:"A",booked: true,checked: true},
      {col:1,row:"B",booked: false,checked: false},
      {col:1,row:"C",booked: true,checked: true},
      {col:1,row:"D",booked: false,checked: true},
      {col:1,row:"E",booked: true,checked: true},
      
      {col:2,row:"A",booked: true,checked: true},
      {col:2,row:"B",booked: false,checked: false},
      {col:2,row:"C",booked: true,checked: true},
      {col:2,row:"D",booked: false,checked: true},
      {col:2,row:"E",booked: true,checked: true},

      {col:3,row:"A",booked: true,checked: true},
      {col:3,row:"B",booked: false,checked: false},
      {col:3,row:"C",booked: true,checked: true},
      {col:3,row:"D",booked: false,checked: true},
      {col:3,row:"E",booked: true,checked: true},

      {col:4,row:"A",booked: true,checked: true},
      {col:4,row:"B",booked: false,checked: false},
      {col:4,row:"C",booked: true,checked: true},
      {col:4,row:"D",booked: false,checked: true},
      {col:4,row:"E",booked: true,checked: true},

      {col:5,row:"A",booked: true,checked: true},
      {col:5,row:"B",booked: false,checked: false},
      {col:5,row:"C",booked: true,checked: true},
      {col:5,row:"D",booked: false,checked: true},
      {col:5,row:"E",booked: true,checked: true},

      {col:6,row:"A",booked: true,checked: true},
      {col:6,row:"B",booked: false,checked: false},
      {col:6,row:"C",booked: true,checked: true},
      {col:6,row:"D",booked: false,checked: true},
      {col:6,row:"E",booked: true,checked: true},

      {col:7,row:"A",booked: true,checked: true},
      {col:7,row:"B",booked: false,checked: false},
      {col:7,row:"C",booked: true,checked: true},
      {col:7,row:"D",booked: false,checked: true},
      {col:7,row:"E",booked: true,checked: true},

      {col:8,row:"A",booked: true,checked: true},
      {col:8,row:"B",booked: false,checked: false},
      {col:8,row:"C",booked: true,checked: true},
      {col:8,row:"D",booked: false,checked: true},
      {col:8,row:"E",booked: true,checked: true},

      {col:9,row:"A",booked: true,checked: true},
      {col:9,row:"B",booked: false,checked: false},
      {col:9,row:"C",booked: true,checked: true},
      {col:9,row:"D",booked: false,checked: true},
      {col:9,row:"E",booked: true,checked: true},

      {col:10,row:"A",booked: true,checked: true},
      {col:10,row:"B",booked: false,checked: false},
      {col:10,row:"C",booked: true,checked: true},
      {col:10,row:"D",booked: false,checked: true},
      {col:10,row:"E",booked: true,checked: true},

      {col:11,row:"A",booked: true,checked: true},
      {col:11,row:"B",booked: false,checked: false},
      {col:11,row:"C",booked: true,checked: true},
      {col:11,row:"D",booked: false,checked: true},
      {col:11,row:"E",booked: true,checked: true},

  ],
  });

  const handleChange = (col,row) => event => {
    let Seats = state.Seats.slice();
    for(let i in Seats){
      if(Seats[i].row === row & Seats[i].col === col){
        Seats[i].checked = event.target.checked;
        setState({Seats});
        break;
      }
    }
    // setState({ ...state, [name]:event.target.checked});
  };

  const ticketCount = state.Seats.filter(Seats => Seats.checked === true & Seats.booked === false).length;
  const ticketPrice = 140;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header/>
        <main>
          <Paper className={classes.mainCanvas}>
          <Grid
                container
                style={{ Height: "30vh", marginBottom: "2vh"}}
                className={classes.cinema}
              >
                <Grid item>
                  <Paper className={classes.paperImage} style ={{backgroundImage: `url(${"./moviePoster/avenger.jpg"})` }}></Paper>
                </Grid>
                <Grid item xs={9}>
                  <Paper className={classes.paperTitle}>{movieTitle}</Paper>
                  <Paper className={classes.paperTheatre}>Theatre {movieTheatre}</Paper>
                  <Paper className={classes.paperTheatre}>{movieTime}</Paper>
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
                    {
                      numberOfRow.map((row) => (
                        <Card className = {classes.seatColNav}>{row}</Card>
                      ))
                    }
                </Grid>
                {numberOfCol.map((i)=>(
                  <Grid item xs={1}>
                  <Container className = {classes.seatCol}>
                    <Card className = {classes.seatRow}>{i}</Card>
                    {state.Seats.filter(Seats => Seats.col === i).map((seat) => (
                          <FormControlLabel 
                            disabled = {seat.booked} 
                            control = {<Checkbox checked = {seat.checked} onChange = {handleChange(seat.col,seat.row)}  
                            className = {classes.seatButton}/>}/>
                      ))}
                    </Container>
                  </Grid>
                ))}
              </Grid>
              <Typography variant = "h5">All Seat:</Typography>
              <Grid container>
                {state.Seats.filter(Seats => Seats.checked === true & Seats.booked === false).map((seat) =>(
                  <Grid container className = {classes.seatConfirm}item xs ={1} justify="center"  alignItems="center">
                    {seat.row}{seat.col}
                  </Grid>
                ))}
              </Grid>
              <Typography variant = "h5">Price: {ticketCount*ticketPrice}</Typography>
              <Grid container justify="space-around">
              <Button
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
