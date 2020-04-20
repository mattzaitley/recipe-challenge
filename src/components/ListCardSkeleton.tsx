import React from 'react';

import { makeStyles, Card, CardContent, CardHeader } from '@material-ui/core';

import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles({
  root: { height: 250, width: 300, margin: 24 },
  header: { height: 60 },
  media: {
    height: 120,
  },
});

export const ListCardSkeleton = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title={<Skeleton width="80%" height={40} />}
      />
      <Skeleton className={classes.media} />
      <CardContent>
        <Skeleton width={60} height={20} />
      </CardContent>
    </Card>
  );
};
