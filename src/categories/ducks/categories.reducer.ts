import { CategoriesState } from './categories.types';

const initialState: CategoriesState = {
  isFetching: false,
  error: null,
};

export const categoriesReducer = (
  state: CategoriesState = initialState,
  action,
) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
