const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Busca pratos por categoria ou área (ex: Italian, Seafood)
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

// Alias para compatibilidade - busca pratos por filtro (categoria ou área)
export const getPratosPorFiltro = async (filtro) => {
  try {
    // Tenta buscar por Categoria primeiro
    let response = await fetch(`${BASE_URL}/filter.php?c=${filtro}`);
    let data = await response.json();
    
    if (!data.meals) {
      // Se não encontrar, tenta por Área/Culinária
      response = await fetch(`${BASE_URL}/filter.php?a=${filtro}`);
      data = await response.json();
    }
    
    return data.meals || [];
  } catch (error) {
    console.error('Erro ao buscar pratos:', error);
    return [];
  }
};

// Busca os detalhes completos de um prato pelo ID
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

// Alias para compatibilidade
export const getDetalhesPrato = async (idMeal) => {
  return fetchMealDetails(idMeal);
};
