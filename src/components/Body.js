import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Bgimg from "../assets/img/autoDriverWeb.png";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Fab from '@mui/material/Fab';
import SmartToyIcon from '@mui/icons-material/SmartToy';

const Body = () => {
  const [drivers_data, setDriversData] = useState(null);

  const getDriversData = async () => {
    const json_data = await fetch(
      "https://d11gklsvr97l1g.cloudfront.net/open/json-data/cumulative_summary.json"
    );
    const drivers_data = await json_data.json();

    const data = {
      drivers_registered: 0,
      no_of_completed_rides: 0,
      riders_registered: 0,
      total_earning: 0,
    };

    for (const ele of drivers_data) {
      data.drivers_registered += ele.drivers_registered;
      data.no_of_completed_rides += ele.no_of_completed_rides;
      data.riders_registered += ele.riders_registered;
      data.total_earning += ele.total_earning;
    }

    setDriversData(data);
  };

  useEffect(() => {
    getDriversData();
  }, []);

  return !drivers_data ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <div className="body-main-container">
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          style={{ whiteSpace: "nowrap", overflow: "hidden" }}
        >
          ▪ Registered drivers: {drivers_data.drivers_registered} ▪ Registered
          Users: {drivers_data.riders_registered} ▪ Completed Trips:
          {drivers_data.no_of_completed_rides} ▪ Drivers Earning: &#8377;
          {drivers_data.total_earning}
        </Typography>
      </div>
      <div className="body-container">
        <div className="body-message">
          <h1 style={{ color: "lightgoldenrodyellow" }}>
            Book an auto with Zero commission
          </h1>
          <h3>
            App by the drivers for the people. 100% direct payment to drivers.
          </h3>
          <h3>
            Namma Yatri is a Direct-to-Driver app. There is no commission or
            middle-men. What you pay goes 100% to the Driver and his family!
          </h3>
          <Link to="/book">
            <Button variant="contained" color="success">
              Book a cab
            </Button>
          </Link>
        </div>
        <div className="driver-img">
          <img src={Bgimg} alt="no-img" width="100%" height="100%" />
        </div>
      </div>
      <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: 16, right: 16 }} href="https://app.wotnot.io/bot-preview/text-mode/4xHvBp7eN7Gq100634986416Cl4U04ZW">
        <SmartToyIcon />
      </Fab>
    </div>
  );
};

export default Body;
