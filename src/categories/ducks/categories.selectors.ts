import { createSelector } from 'reselect';
import { AppState } from '../../types';

export const selectCategoriesState = (state: AppState) => state.categories;

export const selectCategories = createSelector(
  selectCategoriesState,
  ({ categories }) => categories,
);
