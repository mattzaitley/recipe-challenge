import { CategoriesState, CATEGORIES_TYPES } from './categories.types';
import { AppActions } from '../../types';

const initialState: CategoriesState = {
  isFetching: false,
  error: null,
  categories: [],
};

export const categoriesReducer = (
  state: CategoriesState = initialState,
  action: AppActions,
) => {
  switch (action.type) {
    case CATEGORIES_TYPES.REQUEST_CATEGORIES: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case CATEGORIES_TYPES.CATEGORIES_RECEIVED: {
      return {
        ...state,
        isFetching: false,
        error: null,
        categories: action.payload.categories,
      };
    }
    default: {
      return state;
    }
  }
};
