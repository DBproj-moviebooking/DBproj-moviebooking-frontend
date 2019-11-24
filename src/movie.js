import React from "react";
import axois from "axios";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import Select from "react-select";
import { emphasize, makeStyles, useTheme } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const searchDate = new Date();

const suggestions = []

function getdata(){
  axois.get('https://dbproj-backend.herokuapp.com/movie').then((res) => {
    suggestions.map(suggestion =>({
      value: res.data.data.id,
      label: res.data.data.name,
    }))
  })
}

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
  Yellow: "#F6BB42",
  Black: "#0F2111"
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
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    flexGrow: 1,
    minWidth: 4
  },

  timeRoot: {
    flexGrow: 1
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
    height: "40vh",
    position: "relative",
    margin: "5px"
  },
  paperDay: {
    backgroundColor: "white",
    display: "space-between",
    height: "auto",
    margin: ".5vh",
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
    margin: ".5vh",
    fontWeight: "Medium",
    fontSize: "2.5vh",
    padding: "2vh"
  },
  paperTime: {
    backgroundColor: bgColors.Mintgreen,
    height: "5vh",
    width: "15vh",
    margin: ".5vh",
    fontSize: "2vh",
    textAlign: "center",
    display:"flex",
    color: "white"
  },
  
  input: {
    display: "flex",
    padding: 0,
    height: "auto"
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2)
  },
  singleValue: {
    fontSize: 16,
    padding: theme.spacing(1, 2)
  },
  placeholder: {
    position: "absolute",
    left: 2,
    bottom: 6,
    fontSize: 16
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing(2)
  },
  mainButton: {
    width: "10vh",
    fontWeight: "Bold",
    backgroundColor: bgColors.Ltgreen,
    color: "white",
    justify: 'space-between',
    display:'space-between',
  }
}));

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props to be passed on to the wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired
};

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ])
};

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps }
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  );
}

Control.propTypes = {
  /**
   * Children to render.
   */
  children: PropTypes.node,
  /**
   * The mouse down event and the innerRef to pass down to the controller element.
   */
  innerProps: PropTypes.shape({
    onMouseDown: PropTypes.func.isRequired
  }).isRequired,
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]).isRequired,
  selectProps: PropTypes.object.isRequired
};

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.shape({
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onMouseMove: PropTypes.func.isRequired,
    onMouseOver: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired
  }).isRequired,
  /**
   * Inner ref to DOM Node
   */
  innerRef: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.any.isRequired
    })
  ]).isRequired,
  /**
   * Whether the option is focused.
   */
  isFocused: PropTypes.bool.isRequired,
  /**
   * Whether the option is selected.
   */
  isSelected: PropTypes.bool.isRequired
};

function Placeholder(props) {
  const { selectProps, innerProps = {}, children } = props;
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

Placeholder.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired
};

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

SingleValue.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  /**
   * Props passed to the wrapping element for the group.
   */
  innerProps: PropTypes.any.isRequired,
  selectProps: PropTypes.object.isRequired
};

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

ValueContainer.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired
};


function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

Menu.propTypes = {
  /**
   * The children to be rendered.
   */
  children: PropTypes.element.isRequired,
  /**
   * Props to be passed to the menu wrapper.
   */
  innerProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired
};

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

const buttons = [
  { label: "Homepage", path: "/homepage" },
  { label: "Movies", path: "/movies" },
  { label: "Cinemas", path: "/cinema" },
  { lable: "Souvenirs", path: "/souvenir" }
];

const movie = [
    {date: Date("2019-11-19"), title: "Avenger", theatre: "1", showtime: ["8:30", "9:30", "12:30","16:30"]},
    {date: "2019-11-20", title: "ToyStory", theatre: "2", showtime: ["7:20", "8:40", "13:30","17:30"]},
    {date: "11/19/2019", title: "Batman", theatre: "3", showtime: ["8:30", "9:30", "11:00"]},
    {date: "11/20/2019", title: "XXX", theatre: "1", showtime: ["8:30", "9:30", "12:30","16:30"]},
    {date: "11/20/2019", title: "Spiderman", theatre: "2", showtime: ["7:20","17:30"]},
    {date: "11/20/2019", title: "Oloman", theatre: "3", showtime: ["8:30", "9:30", "11:00"]}
];

export default function Movie() {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState(null);
  const handleChangeSingle = value => {
    setSingle(value);
  };

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      "& input": {
        font: "inherit"
      }
    })
  };

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2019-11-19")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
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
              color: bgColors.White,
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
              backgroundColor: bgColors.Black
            }}
          >
            Sign up
          </Button>
          <Button
            variant="outlined"
            size="small"
            style={{
              color: bgColors.White,
              backgroundColor: bgColors.Black
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
          {/* Main featured post */}
          {/* End main featured post */}
          {/* Sub featured posts */}
          <div className={classes.root}>
            <NoSsr marginBottom>
              <Select
                classes={classes}
                styles={selectStyles}
                inputId="react-select-single"
                TextFieldProps={{
                  label: "Movie",
                  InputLabelProps: {
                    htmlFor: "react-select-single",
                    shrink: true
                  }
                }}
                placeholder="Select movie"
                options={suggestions}
                components={components}
                value={single}
                onChange={handleChangeSingle}
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Date"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </NoSsr>
            <Grid container justify="space-around">
              <Button
                variant="contained"
                justify="space-around"
                className={classes.mainButton}
              >
                Search
              </Button>
            </Grid>
          </div>
          <div className={classes.root}>
            <Paper
              maxWidth="lg"
              component="div"
              style={{
                backgroundColor: bgColors.White,
                padding: "5vh"
              }}
            >
              <Typography>{selectedDate.getTime}</Typography>
              {movie.filter(({date}) => (date.getDate === Date("2019-11-20").getDate)).map(({date,title,theatre, showtime}) => (
              <Grid
                container
                style={{ Height: "40vh", marginBottom: "2vh" }}
              >
                <Grid item xs={3}>
                  <Paper className={classes.paperImage}></Paper>
                </Grid>
                <Grid item xs={9}>
<Paper className={classes.paperTitle}>{title}</Paper>
                  <Paper className={classes.paperTheatre}>{theatre}</Paper>
      
                  <Paper className={classes.paperDay}>
                    <Grid container justify="flex-left">
                    {showtime.map((time) => (
                      <Grid item  justify="space-around">
                        <Button className={classes.paperTime}>{time}</Button>
                      </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>))}
            </Paper>
          </div>
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
