import { connect } from 'react-redux';
import { AppState } from '../types';
import { selectRecipeDetailsState } from './ducks/recipes.selectors';
import { fetchRecipeDetails } from './ducks/recipes.operations';
import { RecipeDetails } from './RecipeDetails.component';

export const mapStateToProps = (state: AppState) => {
  const { isFetching, recipeDetails } = selectRecipeDetailsState(state);
  return {
    isFetching,
    recipe: recipeDetails,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipeDetails: (id: string) => dispatch(fetchRecipeDetails(id)),
  };
};

export const ConnectedRecipeDetails = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipeDetails);
