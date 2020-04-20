export enum CATEGORIES_TYPES {
  REQUEST_CATEGORIES = 'categories/REQUEST_CATEGORIES',
  CATEGORIES_RECEIVED = 'categories/CATEGORIES_RECEIVED',
  CATEGORIES_ERRORED = 'categories/CATEGORIES_ERRORED',
}

export interface CategoriesState {
  isFetching: boolean;
  error: string;
  categories: Category[];
}

export interface ApiCategory {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface Category {
  id: string;
  label: string;
  thumbnailURL: string;
  description: string;
}

export interface RequestCategoriesAction {
  type: CATEGORIES_TYPES.REQUEST_CATEGORIES;
}
export interface CategoriesReceivedAction {
  type: CATEGORIES_TYPES.CATEGORIES_RECEIVED;
  payload: {
    categories: Category[];
  };
}

export type CategoriesActions =
  | RequestCategoriesAction
  | CategoriesReceivedAction;
