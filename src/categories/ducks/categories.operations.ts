import { requestCategories } from './categories.actions';

export const fetchCategories = () => (dispatch) => {
  dispatch(requestCategories());
};
