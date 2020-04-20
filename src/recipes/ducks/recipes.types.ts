export enum RECIPES_TYPES {
  REQUEST_RECIPES = 'recipes/REQUEST_RECIPES',
  RECIPES_RECEIVED = 'recipes/RECIPES_RECEIVED',
  RECIPES_ERRORED = 'recipes/RECIPES_ERRORED',
  REQUEST_RECIPE_DETAILS = 'recipes/REQUEST_RECIPE_DETAILS',
  RECIPE_DETAILS_RECEIVED = 'recipes/RECIPE_DETAILS_RECEIVED',
}

export interface RecipesState {
  isFetching: boolean;
  error: string;
  recipes: Recipe[];
}

export interface RecipeDetailsState {
  isFetching: boolean;
  error: string;
  recipeDetails: RecipeDetail;
}

export interface ApiRecipe {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

export interface ApiRecipeDetail extends ApiRecipe {
  strDrinkAlternate: string;
  strTags?: string[];
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strYoutube: string;
  [key: string]: string | string[];
}

export interface Recipe {
  id: string;
  thumbnailURL: string;
  label: string;
}

export interface Ingredient {
  ingredient: string;
  measurement: string;
}

export interface RecipeDetail {
  id: string;
  label: string;
  thumbnailURL: string;
  cuisine: string;
  instructions: string;
  ingredients: Ingredient[];
  drink: string;
  category: string;
  youtubeURL: string;
}

export interface RequestRecipesAction {
  type: RECIPES_TYPES.REQUEST_RECIPES;
}

export interface RequestRecipeDetailsAction {
  type: RECIPES_TYPES.REQUEST_RECIPE_DETAILS;
}

export interface RecipeDetailsReceivedAction {
  type: RECIPES_TYPES.RECIPE_DETAILS_RECEIVED;
  payload: {
    recipeDetails: RecipeDetail;
  };
}

export interface RecipesReceivedAction {
  type: RECIPES_TYPES.RECIPES_RECEIVED;
  payload: {
    recipes: Recipe[];
  };
}

export type RecipesActions =
  | RequestRecipesAction
  | RecipesReceivedAction
  | RequestRecipeDetailsAction
  | RecipeDetailsReceivedAction;
