import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { amber } from "@material-ui/core/colors";
import { common } from "@material-ui/core/colors";
import RideScheduledMessage from "./RideSchuduleMessage";
import Fab from "@mui/material/Fab";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      input: {
        color: amber[200],
      },
    },
    MuiInputLabel: {
      root: {
        color: common.white,
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const CabBookingForm = () => {
  const [rideScheduled, setRideScheduled] = useState(false);

  const classes = useStyles();
  const [values, setValues] = useState({
    pickupLocation: "",
    dropoffLocation: "",
    pickupDate: "",
    pickupTime: "",
    cabType: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission

    setRideScheduled(true);
  };

  const handleBackClick = () => {
    setRideScheduled(false);
    setValues({
      pickupLocation: "",
      dropoffLocation: "",
      pickupDate: "",
      pickupTime: "",
      cabType: "",
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        {rideScheduled ? (
          <RideScheduledMessage onBackClick={handleBackClick} />
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              paddingRight: "10%",
              paddingTop: "5%",
              paddingLeft: "10%",
              paddingBottom: "9%",
              color: "white",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Book a Cab
            </Typography>
            <Grid
              container
              spacing={3}
              inputProps={{
                style: { color: "red" },
              }}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="pickup-location"
                  name="pickupLocation"
                  label="Pickup Location"
                  fullWidth
                  value={values.pickupLocation}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="dropoff-location"
                  name="dropoffLocation"
                  label="Dropoff Location"
                  fullWidth
                  value={values.dropoffLocation}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="pickup-date"
                  name="pickupDate"
                  label="Pickup Date"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  value={values.pickupDate}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="pickup-time"
                  name="pickupTime"
                  label="Pickup Time"
                  type="time"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  fullWidth
                  value={values.pickupTime}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl className={classes.formControl} fullWidth>
                  <InputLabel id="cab-type-label">Cab Type</InputLabel>
                  <Select
                    labelId="cab-type-label"
                    id="cab-type"
                    name="cabType"
                    value={values.cabType}
                    onChange={handleInputChange}
                  >
                    <MenuItem value="economy">Economy</MenuItem>
                    <MenuItem value="comfort">Comfort</MenuItem>
                    <MenuItem value="luxury">Luxury</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                  type="submit"
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </ThemeProvider>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "fixed", bottom: 16, right: 16 }}
        href="https://app.wotnot.io/bot-preview/text-mode/4xHvBp7eN7Gq100634986416Cl4U04ZW"
      >
        <SmartToyIcon />
      </Fab>
    </>
  );
};

export default CabBookingForm;
