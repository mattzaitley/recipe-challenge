import { requestRecipes } from './recipes.actions';

export const fetchRecipes = () => (dispatch) => {
  dispatch(requestRecipes());
};
