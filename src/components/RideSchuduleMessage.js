import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ArrowBack } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  backButton: {
    marginTop: theme.spacing(2)
  }
}));

const RideScheduledMessage = ({ onBackClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" align="center" color="primary">
        Your ride has been scheduled!
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<ArrowBack />}
        className={classes.backButton}
        onClick={onBackClick}
      >
        Back
      </Button>
    </div>
  );
};

export default RideScheduledMessage;
