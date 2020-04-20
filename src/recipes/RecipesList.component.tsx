import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router';
import { Recipe } from './ducks/recipes.types';
import { Nav } from '../components/Nav';
import { ListCard } from '../components/ListCard';

export interface RecipesListProps {
  isFetching: boolean;
  fetchRecipes: (category: string) => void;
  recipes: Recipe[];
}

export const RecipesList: React.SFC<RecipesListProps> = ({
  isFetching,
  fetchRecipes,
  recipes,
}) => {
  const { category } = useParams();
  useEffect(() => {
    fetchRecipes(category);
    // react-hooks/exhaustive-deps linting rule is enabled deep in CRA, so need to brute-force disable it
    // eslint-disable-next-line
  }, []);
  if (isFetching) return <CircularProgress />;
  return (
    <React.Fragment>
      <Nav currentPathLabel={category} />
      {recipes.map((recipe) => (
        <ListCard
          key={recipe.id}
          linkPath={`/${category}/${recipe.id}`}
          label={recipe.label}
          thumbnailURL={recipe.thumbnailURL}
        />
      ))}
    </React.Fragment>
  );
};
