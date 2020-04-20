import { connect } from 'react-redux';
import { AppState } from '../types';
import { selectCategoriesState } from './ducks/categories.selectors';
import {
  CategoriesListProps,
  CategoriesList,
} from './CategoriesList.component';
import { fetchCategories } from './ducks/categories.operations';

export const mapStateToProps = (
  state: AppState,
): Partial<CategoriesListProps> => {
  const { isFetching, categories } = selectCategoriesState(state);
  return {
    isFetching,
    categories,
  };
};

export const mapDispatchToProps = (dispatch): Partial<CategoriesListProps> => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export const ConnectedCategoriesList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesList);
