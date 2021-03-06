import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import useStyles from './Componentes.styles';

function PostListItem({ post, onDelete }) {
  const classes = useStyles();
  const {
    title, content, name, cuid, slug, media,
  } = post;
  return (
    <Card className="w-100 my-4">
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Link to={`/posts/${cuid}/${slug}`}>
            {title}
          </Link>
        </Typography>
        <Typography component="p" className="mt-3">
          {content}
        </Typography>
        { media && (
        <figure className={classes.imgWrapper}>
          <img src={media} alt="media" />
        </figure>
        )}
        <Typography color="textSecondary" component="p" className="mt-3 font-italic">
          From
          {' '}
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary" onClick={onDelete}>
          Delete post
        </Button>
      </CardActions>
    </Card>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    media: PropTypes.string,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
