import { Card, CardActionArea, CardMedia, CardContent, makeStyles, Typography, CardActions, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10)
  },
  card: {
    marginBottom: theme.spacing(5)
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    }
  }
}))

function Post() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia 
        className={classes.media}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">My Firtst Post</Typography>
          <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus id, itaque illo nulla laboriosam, atque reprehenderit dolore accusantium ratione fugiat est dolorem, quos neque totam doloremque eaque tempora veniam! Quae.</Typography>
        </CardContent>
      </CardActionArea>
       <CardActions>
         <Button size="small" color="primary">Share</Button>
         <Button size="small" color="primary">Learn More</Button>
       </CardActions>
    </Card>
  );
}

export default Post;