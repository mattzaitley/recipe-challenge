import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Category } from './ducks/categories.types';
import { ListCard } from '../components/ListCard';
import { ListCardSkeleton } from '../components/ListCardSkeleton';

export interface CategoriesListProps {
  isFetching: boolean;
  fetchCategories: () => void;
  categories: Category[];
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export const CategoriesList: React.SFC<CategoriesListProps> = ({
  isFetching,
  fetchCategories,
  categories,
}) => {
  const classes = useStyles();
  useEffect(() => {
    fetchCategories();
    // react-hooks/exhaustive-deps linting rule is enabled deep in CRA, so need to brute-force disable it
    // eslint-disable-next-line
  }, []);

  if (isFetching) {
    return (
      <div className={classes.root}>
        {[0, 1, 2, 4].map((i) => (
          <ListCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className={classes.root}>
      {categories.map((category) => (
        <ListCard
          key={category.id}
          linkPath={`/${category.label}`}
          label={category.label}
          thumbnailURL={category.thumbnailURL}
        />
      ))}
    </div>
  );
};
