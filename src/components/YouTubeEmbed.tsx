import React from 'react';
import { CardMedia, makeStyles } from '@material-ui/core';

interface YouTubeEmbedProps {
  url: string;
  title: string;
}

const useStyles = makeStyles({
  iframe: {
    height: 400,
  },
});

export const YouTubeEmbed: React.SFC<YouTubeEmbedProps> = ({ url, title }) => {
  const classes = useStyles();
  const videoId = url.split('v=')[1];
  return (
    <CardMedia
      component="iframe"
      title={title}
      className={classes.iframe}
      src={`https://www.youtube.com/embed/${videoId}`}
    />
  );
};
