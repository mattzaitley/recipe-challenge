import { RecipesState } from './recipes.types';

const initialState: RecipesState = {
  isFetching: false,
  error: null,
};

export const recipesReducer = (state: RecipesState = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
