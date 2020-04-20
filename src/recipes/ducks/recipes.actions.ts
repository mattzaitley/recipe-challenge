import {
  RECIPES_TYPES,
  RequestRecipesAction,
  Recipe,
  RecipesReceivedAction,
  RequestRecipeDetailsAction,
  RecipeDetailsReceivedAction,
  RecipeDetail,
} from './recipes.types';

export const requestRecipes = (): RequestRecipesAction => ({
  type: RECIPES_TYPES.REQUEST_RECIPES,
});

export const requestRecipeDetails = (): RequestRecipeDetailsAction => ({
  type: RECIPES_TYPES.REQUEST_RECIPE_DETAILS,
});

export const recipesReceived = (recipes: Recipe[]): RecipesReceivedAction => ({
  type: RECIPES_TYPES.RECIPES_RECEIVED,
  payload: {
    recipes,
  },
});

export const recipeDetailsReceived = (
  recipeDetails: RecipeDetail,
): RecipeDetailsReceivedAction => ({
  type: RECIPES_TYPES.RECIPE_DETAILS_RECEIVED,
  payload: {
    recipeDetails,
  },
});
