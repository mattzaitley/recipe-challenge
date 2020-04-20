import React, { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { Category } from './ducks/categories.types';
import { ListCard } from '../components/ListCard';

export interface CategoriesListProps {
  isFetching: boolean;
  fetchCategories: () => void;
  categories: Category[];
}

export const CategoriesList: React.SFC<CategoriesListProps> = ({
  isFetching,
  fetchCategories,
  categories,
}) => {
  useEffect(() => {
    fetchCategories();
    // react-hooks/exhaustive-deps linting rule is enabled deep in CRA, so need to brute-force disable it
    // eslint-disable-next-line
  }, []);

  if (isFetching) return <CircularProgress />;

  return (
    <div>
      {categories.map((category) => (
        <ListCard
          key={category.id}
          linkPath={`/${category.label}`}
          label={category.label}
          thumbnailURL={category.thumbnailURL}
        />
      ))}
    </div>
  );
};
