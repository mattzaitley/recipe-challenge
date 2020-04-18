import { Action } from 'redux';
import { RecipesState } from './recipes/ducks/recipes.types';
import { CategoriesState } from './categories/ducks/categories.types';

export type ToResponse<T> = [Error?, T?];

export interface AppState {
  recipes: RecipesState;
  categories: CategoriesState;
}

export type AppActions = Action;
