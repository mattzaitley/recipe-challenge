import React from 'react';
import { Typography } from '@material-ui/core';
import { Ingredient } from '../recipes/ducks/recipes.types';

interface IngredientListProps {
  ingredients: Ingredient[];
}

export const IngredientList: React.SFC<IngredientListProps> = ({
  ingredients,
}) => {
  return (
    <React.Fragment>
      <Typography variant="subtitle1">Ingredients</Typography>
      <ul>
        {ingredients.map(({ ingredient, measurement }) => (
          <li key={ingredient}>
            <Typography>
              {ingredient} - <strong>{measurement}</strong>
            </Typography>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};
