const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMealsByCategory = async (categoria) => {
  try {
    const response = await fetch(
      `${BASE_URL}/filter.php?c=${categoria}`
    );
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error('Erro ao buscar refeições:', error);
    return [];
  }
};

export const fetchMealDetails = async (mealId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    return data.meals?.[0] || null;
  } catch (error) {
    console.error('Erro ao buscar detalhes do prato:', error);
    return null;
  }
};
