const URL_BASE = 'https://www.themealdb.com/api/json/v1/1';

/**
 * Busca uma lista de pratos filtrando por categoria ou culinária/origem.
 * Ex: 'Italian', 'Seafood', 'Dessert'
 */
export const buscarPratosPorFiltro = async (filtro) => {
  try {
    let resposta = await fetch(`${URL_BASE}/filter.php?c=${filtro}`);
    let dados = await resposta.json();

    if (!dados.meals) {
      resposta = await fetch(`${URL_BASE}/filter.php?a=${filtro}`);
      dados = await resposta.json();
    }

    return dados.meals || [];
  } catch (erro) {
    console.error('Erro ao buscar a lista de pratos:', erro);
    return [];
  }
};

/**
 * Busca os detalhes completos de um prato específico através do seu ID.
 * Exemplo de ID: '52772'
 */
export const buscarDetalhesDoPrato = async (idDoPrato) => {
  try {
    const resposta = await fetch(`${URL_BASE}/lookup.php?i=${idDoPrato}`);
    const dados = await resposta.json();

    return dados.meals?.[0] || null;
  } catch (erro) {
    console.error('Erro ao buscar os detalhes do prato:', erro);
    return null;
  }
};
