import { RecipesState, RECIPES_TYPES } from './recipes.types';
import { AppActions } from '../../types';

const initialState: RecipesState = {
  isFetching: false,
  error: null,
  recipes: [],
};

export const recipesReducer = (
  state: RecipesState = initialState,
  action: AppActions,
) => {
  switch (action.type) {
    case RECIPES_TYPES.REQUEST_RECIPES: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case RECIPES_TYPES.RECIPES_RECEIVED: {
      return {
        ...state,
        error: null,
        recipes: action.payload.recipes,
        isFetching: false,
      };
    }
    default: {
      return state;
    }
  }
};
