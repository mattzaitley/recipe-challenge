import {
  RecipesState,
  RecipeDetailsState,
  RecipesActions,
} from './recipes/ducks/recipes.types';
import {
  CategoriesState,
  CategoriesActions,
} from './categories/ducks/categories.types';

export type ToResponse<T> = [Error?, T?];

export interface AppState {
  recipesList: RecipesState;
  recipeDetails: RecipeDetailsState;
  categories: CategoriesState;
}

export type AppActions = CategoriesActions | RecipesActions;
