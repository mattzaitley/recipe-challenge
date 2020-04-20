import {
  CATEGORIES_TYPES,
  Category,
  CategoriesReceivedAction,
  RequestCategoriesAction,
} from './categories.types';

export const requestCategories = (): RequestCategoriesAction => ({
  type: CATEGORIES_TYPES.REQUEST_CATEGORIES,
});

export const categoriesReceived = (
  categories: Category[],
): CategoriesReceivedAction => ({
  type: CATEGORIES_TYPES.CATEGORIES_RECEIVED,
  payload: { categories },
});
