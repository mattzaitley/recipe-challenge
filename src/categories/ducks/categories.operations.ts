import { requestCategories, categoriesReceived } from './categories.actions';
import { to, get } from '../../utils/http';
import { apiURL } from '../../constants';
import { ApiCategory, Category } from './categories.types';
import { ToResponse } from '../../types';

export const adaptResponse = ({
  categories,
}: {
  categories: ApiCategory[];
}): Category[] =>
  categories.map((category) => ({
    id: category.idCategory,
    label: category.strCategory,
    thumbnailURL: category.strCategoryThumb,
    description: category.strCategoryDescription,
  }));

export const fetchCategories = () => async (dispatch) => {
  dispatch(requestCategories());
  const [err, response]: ToResponse<{ categories: ApiCategory[] }> = await to(
    get(`${apiURL}/categories.php`),
  );
  if (err) {
    return;
  }
  const categories = adaptResponse(response);
  dispatch(categoriesReceived(categories));
};
