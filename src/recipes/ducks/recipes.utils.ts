import {
  ApiRecipe,
  Recipe,
  ApiRecipeDetail,
  RecipeDetail,
} from './recipes.types';

export const adaptMealsApiResponse = (meals: ApiRecipe[]): Recipe[] =>
  meals.map((meal) => ({
    id: meal.idMeal,
    label: meal.strMeal,
    thumbnailURL: meal.strMealThumb,
  }));

export const adaptRecipeDetailsResponse = (
  meal: ApiRecipeDetail,
): RecipeDetail => {
  const ingredients = [];
  for (let i = 1; i <= 20; i += 1) {
    if (meal[`strIngredient${i}`] !== '') {
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measurement: meal[`strMeasure${i}`],
      });
    }
  }
  return {
    id: meal.idMeal,
    label: meal.strMeal,
    thumbnailURL: meal.strMealThumb,
    youtubeURL: meal.strYoutube,
    category: meal.strCategory,
    drink: meal.strDrinkAlternate,
    instructions: meal.strInstructions,
    cuisine: meal.strArea,
    ingredients,
  };
};
