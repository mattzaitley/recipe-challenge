import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core';
import { Recipe } from './ducks/recipes.types';
import { Nav } from '../components/Nav';
import { ListCard } from '../components/ListCard';
import { ListCardSkeleton } from '../components/ListCardSkeleton';

export interface RecipesListProps {
  isFetching: boolean;
  fetchRecipes: (category: string) => void;
  recipes: Recipe[];
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
});

export const RecipesList: React.SFC<RecipesListProps> = ({
  isFetching,
  fetchRecipes,
  recipes,
}) => {
  const { category } = useParams();
  const classes = useStyles();
  useEffect(() => {
    fetchRecipes(category);
    // react-hooks/exhaustive-deps linting rule is enabled deep in CRA, so need to brute-force disable it
    // eslint-disable-next-line
  }, []);
  if (isFetching) {
    return (
      <div className={classes.root}>
        <Nav currentPathLabel={category} />

        {[0, 1, 2, 4].map((i) => (
          <ListCardSkeleton key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Nav currentPathLabel={category} />
      {recipes.map((recipe) => (
        <ListCard
          key={recipe.id}
          linkPath={`/${category}/${recipe.id}`}
          label={recipe.label}
          thumbnailURL={recipe.thumbnailURL}
        />
      ))}
    </div>
  );
};
