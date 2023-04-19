import React from 'react';
import { Container, Typography, Card, CardContent, makeStyles } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
// import AboutUsImage from './AboutUsImage.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginBottom: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  image: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h4" align="center" className={classes.header} color="secondary">
        About Us
      </Typography>
      <img src={"https://nammayatri.in/img/driverOnboard.png"} alt="About Us" className={classes.image} width="100px" height="400px"/>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Who We Are
          </Typography>
          <Typography variant="body1">
          Customer friendly app Namma Yatri is a mobility application built with a vision to effectively contribute to the Open Mobility initiative. The true strength of an open mobility initiative lies in a collective ecosystem of multiple mobility service providers to coexist on a common standard network. This allows for enhanced choice for customers to avail the benefits of a truly multi modal offering. The application, has been built on the Beckn Protocol which is an open source protocol.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Our Team
          </Typography>
          <div>
            <PersonIcon className={classes.icon} />
            <Typography variant="subtitle1">
              Sahil Saxena
            </Typography>
          </div>
          <div>
            <WorkIcon className={classes.icon} />
            <Typography variant="subtitle1">
              Anjali Pathak
            </Typography>
          </div>
          <div>
            <SchoolIcon className={classes.icon} />
            <Typography variant="subtitle1">
              Priyal Gupta
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Our vision
          </Typography>
          <Typography variant="body1">
          Since the Namma Yatri customer app will be offering multiple mobility services in a single app, We believe customers will prefer to use this for their daily commute needs. Auto rickshaws are the first contributors to this initiative. Any Auto driver can complete the KYC verification and start using Namma Yatri.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default AboutUs;
