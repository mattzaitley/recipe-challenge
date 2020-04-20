import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: { minHeight: 250, width: 300 },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  headerContent: {
    width: '100%',
  },
  headerTitle: {
    width: '100%',
  },
});

export interface ListCardProps {
  linkPath: string;
  label: string;
  thumbnailURL: string;
}

export const ListCard: React.SFC<ListCardProps> = ({
  label,
  thumbnailURL,
  linkPath,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={label}
        titleTypographyProps={{
          noWrap: true,
          className: classes.headerTitle,
        }}
        classes={{ content: classes.headerContent }}
      />
      <CardMedia className={classes.media} image={thumbnailURL} title={label} />
      <CardContent>
        <Link to={linkPath}>
          <Typography>Read more!</Typography>
        </Link>
      </CardContent>
    </Card>
  );
};
