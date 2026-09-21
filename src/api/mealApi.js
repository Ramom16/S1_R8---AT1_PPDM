const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

// Busca pratos por área (ex: Italian) ou por categoria (ex: Seafood)
export const getPratosPorFiltro = async (filtro) => {
  try {
    // Tenta buscar por Categoria primeiro, se não encontrar tenta por Área/Culinária
    let response = await fetch(`${BASE_URL}/filter.php?c=${filtro}`);
    let data = await response.json();
    
    if (!data.meals) {
      response = await fetch(`${BASE_URL}/filter.php?a=${filtro}`);
      data = await response.json();
    }
    
    return data.meals || [];
  } catch (error) {
    console.error("Erro ao buscar pratos:", error);
    return [];
  }
};

// Busca os detalhes completos de um prato pelo ID
export const getDetalhesPrato = async (idMeal) => {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${idMeal}`);
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  } catch (error) {
    console.error("Erro ao buscar detalhes do prato:", error);
    return null;
  }
};