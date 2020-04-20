import { connect } from 'react-redux';
import { AppState } from '../types';
import { selectRecipesState } from './ducks/recipes.selectors';
import { RecipesListProps, RecipesList } from './RecipesList.component';
import { fetchRecipes } from './ducks/recipes.operations';

export const mapStateToProps = (state: AppState): Partial<RecipesListProps> => {
  const { isFetching, recipes } = selectRecipesState(state);
  return {
    isFetching,
    recipes,
  };
};

export const mapDispatchToProps = (dispatch): Partial<RecipesListProps> => {
  return {
    fetchRecipes: (category) => dispatch(fetchRecipes(category)),
  };
};

export const ConnectedRecipesList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecipesList);
