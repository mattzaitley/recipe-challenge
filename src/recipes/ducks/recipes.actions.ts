import { RECIPES_TYPES } from './recipes.types';

export const requestRecipes = () => ({
  type: RECIPES_TYPES.REQUEST_RECIPES,
});
