import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import {ApiService} from '../../services/ApiService';
import {Loading} from '../../components/loading/Loading';

const useStyles = makeStyles({
  card: {
    width: '30%',
    marginBottom: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
});

export const Posts: React.FC = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    ApiService.getPosts()
      .execute()
      .then((r) => {
        console.log(r);
        setPosts(r.data || []);
      });
  }, []);

  return (
    <Grid item xs={12} className="grid flex">
      {posts.length > 0 ? (
        posts.map((p: any) => (
          <Card className={classes.card} key={p.id}>
            <CardHeader
              avatar={<Avatar alt={p.owner.firstName} src={p.owner.picture} />}
              title={`${p.owner.firstName} ${p.owner.lastName}`}
              subheader={p.owner.email}
            />
            <CardMedia image={p.image} title="Post" className={classes.media} />
            <CardContent>
              {' '}
              <Typography variant="body2" color="textSecondary" component="p">
                {p.text}
              </Typography>
            </CardContent>
            <CardActions>sdfgs</CardActions>
          </Card>
        ))
      ) : (
        <Loading />
      )}
    </Grid>
  );
};
