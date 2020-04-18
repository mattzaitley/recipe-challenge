export enum RECIPES_TYPES {
  REQUEST_RECIPES = 'recipes/REQUEST_RECIPES',
  RECIPES_RECEIVED = 'recipes/RECIPES_RECEIVED',
  RECIPES_ERRORED = 'recipes/RECIPES_ERRORED',
}

export interface RecipesState {
  isFetching: boolean;
  error: string;
}
