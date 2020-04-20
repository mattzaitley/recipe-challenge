import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router';
import { RecipeDetail } from './ducks/recipes.types';
import { Nav } from '../components/Nav';

export interface RecipeDetailsProps {
  isFetching: boolean;
  fetchRecipeDetails: (id: string) => void;
  recipe: RecipeDetail;
}

export const RecipeDetails: React.SFC<RecipeDetailsProps> = ({
  isFetching,
  fetchRecipeDetails,
  recipe,
}) => {
  const { recipeId } = useParams();
  useEffect(() => {
    fetchRecipeDetails(recipeId);
    // react-hooks/exhaustive-deps linting rule is enabled deep in CRA, so need to brute-force disable it
    // eslint-disable-next-line
  }, []);
  if (isFetching || !recipe) return <CircularProgress />;
  return (
    <div>
      <Nav currentPathLabel={recipe.label} />
      {recipe.label}
    </div>
  );
};
