import { AppActions } from '../../types';
import { RecipeDetailsState, RECIPES_TYPES } from './recipes.types';

const initialState = {
  isFetching: false,
  error: null,
  recipeDetails: null,
};

export const recipeDetailsReducer = (
  state: RecipeDetailsState = initialState,
  action: AppActions,
) => {
  switch (action.type) {
    case RECIPES_TYPES.REQUEST_RECIPE_DETAILS: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case RECIPES_TYPES.RECIPE_DETAILS_RECEIVED: {
      return {
        ...state,
        isFetching: false,
        error: null,
        recipeDetails: action.payload.recipeDetails,
      };
    }
    default:
      return state;
  }
};
