import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import red from '@material-ui/core/colors/red';

import { withRouter } from 'react-router';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
        backgroundColor: "#3b3b3b",
        color: 'white',
        borderRadius: '20px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[400],
    },
    subHeading: {
        color: '#ababab'
    }
});

const ContentCard = ({ post, history }) => {
  const classes = useStyles();

  const onClickHandler = () => history.push(`/${post.type}/${post.id}`)

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => onClickHandler()}>
        <CardMedia
            className={classes.media}
            image={post.pic}
            title={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" noWrap>
            {post.title}
          </Typography>
          <Typography variant="body2" component="p" className={classes.subHeading}>
              This is a  test summary so the card styling can be easily and effectively...
          </Typography>
        </CardContent>
        <CardHeader
            avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
                $
            </Avatar>
            }
            title='Author'
            subheader={<Typography variant='body2' component="h2" className={classes.subHeading}>Date Posted!!</Typography>}
        />
      </CardActionArea>
    </Card>
  );
}

export default withRouter(ContentCard)