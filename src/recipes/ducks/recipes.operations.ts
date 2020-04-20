import {
  requestRecipes,
  recipesReceived,
  requestRecipeDetails,
  recipeDetailsReceived,
} from './recipes.actions';
import { ApiRecipe, ApiRecipeDetail } from './recipes.types';
import {
  adaptMealsApiResponse,
  adaptRecipeDetailsResponse,
} from './recipes.utils';
import { ToResponse } from '../../types';
import { to, get } from '../../utils/http';
import { apiURL } from '../../constants';

export const fetchRecipes = (category: string) => async (dispatch) => {
  dispatch(requestRecipes());
  const [err, response]: ToResponse<{ meals: ApiRecipe[] }> = await to(
    get(`${apiURL}/filter.php`, { c: category }),
  );
  if (err) {
    return;
  }
  const recipes = adaptMealsApiResponse(response.meals);
  dispatch(recipesReceived(recipes));
};

export const fetchRecipeDetails = (id: string) => async (dispatch) => {
  dispatch(requestRecipeDetails());
  const [err, response]: ToResponse<{ meals: ApiRecipeDetail[] }> = await to(
    get(`${apiURL}/lookup.php`, { i: id }),
  );
  if (err) {
    return;
  }
  dispatch(
    recipeDetailsReceived(adaptRecipeDetailsResponse(response.meals[0])),
  );
};
