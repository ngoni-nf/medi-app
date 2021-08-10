import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    fontSize: 42,
    color: '#fff',
    width: '50%',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: 60,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  card: {
    width: '30%',
    textAlign: 'center',
  },
  cardContent: {
    justifyContent: 'center',
  },
});

export const HomePage: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className="grid centered">
      <Typography className={classes.header} variant="h1">
        Welcome to DummyApi.io, where you can create apps with real API calls!
        You can discover posts, see users and do much more.
      </Typography>
      <Box className={classes.container}>
        <Card className={classes.card}>
          <CardContent>
            <DynamicFeedIcon color="primary" fontSize="large" />
            <Typography variant="h6">SEE POSTS</Typography>
          </CardContent>
          <CardActions className={classes.cardContent}>
            <Link to="/posts">
              <Button variant="outlined" size="large" color="primary">
                GO!
              </Button>
            </Link>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardContent>
            <AccountCircleIcon color="primary" fontSize="large" />
            <Typography variant="h6">SEE USERS</Typography>
          </CardContent>
          <CardActions className={classes.cardContent}>
            <Link to="/users">
              <Button variant="outlined" color="primary" size="large">
                GO!
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
};
