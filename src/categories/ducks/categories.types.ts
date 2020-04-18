export enum CATEGORIES_TYPES {
  REQUEST_CATEGORIES = 'categories/REQUEST_CATEGORIES',
  CATEGORIES_RECEIVED = 'categories/CATEGORIES_RECEIVED',
  CATEGORIES_ERRORED = 'categories/CATEGORIES_ERRORED',
}

export interface CategoriesState {
  isFetching: boolean;
  error: string;
}
