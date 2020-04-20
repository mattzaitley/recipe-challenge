import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  p: {
    marginBottom: 8,
  },
});

export interface InstructionsProps {
  body: string;
}

export const Instructions: React.SFC<InstructionsProps> = ({ body }) => {
  const classes = useStyles();
  /* eslint-disable react/no-array-index-key */
  return (
    <div>
      {body.split('\n').map((paragraph, i) => (
        <Typography key={i} className={classes.p}>
          {paragraph}
        </Typography>
      ))}
    </div>
  );
};
