import { AppState } from '../../types';

export const selectRecipesState = (state: AppState) => state.recipesList;

export const selectRecipeDetailsState = (state: AppState) =>
  state.recipeDetails;
