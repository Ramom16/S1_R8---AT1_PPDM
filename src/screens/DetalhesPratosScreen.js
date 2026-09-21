import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { fetchMealDetails } from '../api/mealApi';

export default function DetalhesPratosScreen({ route }) {
  const idMeal = route?.params?.idMeal;
  const [prato, setPrato] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    carregarDetalhes();
  }, [idMeal]);

  const carregarDetalhes = async () => {
    if (!idMeal) {
      setError('ID do prato não encontrado');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const dados = await fetchMealDetails(idMeal);
      if (dados) {
        setPrato(dados);
      } else {
        setError('Prato não encontrado');
      }
    } catch (err) {
      console.error('Erro ao carregar detalhes do prato:', err);
      setError('Erro ao carregar os detalhes. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.containerCenter}>
        <ActivityIndicator size="large" color="#FF6B35" />
        <Text style={styles.loadingText}>Carregando detalhes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!prato) {
    return (
      <View style={styles.containerCenter}>
        <Text style={styles.errorText}>Prato não encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Imagem em Destaque */}
      <Image
        source={{ uri: prato.strMealThumb }}
        style={styles.imagemPrincipal}
      />

      {/* Conteúdo */}
      <View style={styles.conteudo}>
        {/* Nome do Prato */}
        <Text style={styles.nomePrato}>{prato.strMeal}</Text>

        {/* Categoria e Origem */}
        <View style={styles.infoContainer}>
          <View style={styles.infoBadge}>
            <Text style={styles.infoLabel}>Categoria</Text>
            <Text style={styles.infoValor}>{prato.strCategory}</Text>
          </View>
          <View style={styles.infoBadge}>
            <Text style={styles.infoLabel}>Origem</Text>
            <Text style={styles.infoValor}>{prato.strArea}</Text>
          </View>
        </View>

        {/* Modo de Preparo */}
        <View style={styles.secaoInstrucoes}>
          <Text style={styles.tituloSecao}>Modo de Preparo</Text>
          <View style={styles.boxInstrucoes}>
            <Text style={styles.textoInstrucoes}>
              {prato.strInstructions}
            </Text>
          </View>
        </View>

        {/* Ingredientes (se disponível) */}
        {renderIngredientes()}
      </View>
    </ScrollView>
  );

  function renderIngredientes() {
    const ingredientes = [];

    for (let i = 1; i <= 20; i++) {
      const ingrediente = prato[`strIngredient${i}`];
      const medida = prato[`strMeasure${i}`];

      if (ingrediente && ingrediente.trim()) {
        ingredientes.push({
          nome: ingrediente,
          medida: medida || '',
        });
      }
    }

    if (ingredientes.length === 0) return null;

    return (
      <View style={styles.secaoIngredientes}>
        <Text style={styles.tituloSecao}>Ingredientes</Text>
        <View style={styles.listaIngredientes}>
          {ingredientes.map((item, index) => (
            <View key={index} style={styles.itemIngrediente}>
              <View style={styles.circuloIngrediente} />
              <Text style={styles.nomeIngrediente}>{item.nome}</Text>
              <Text style={styles.medidaIngrediente}>{item.medida}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  imagemPrincipal: {
    width: '100%',
    height: 280,
    backgroundColor: '#e0e0e0',
  },
  conteudo: {
    backgroundColor: '#ffffff',
    marginTop: 0,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  nomePrato: {
    fontSize: 26,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 16,
    lineHeight: 32,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  infoBadge: {
    flex: 1,
    backgroundColor: '#fff3e0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 11,
    color: '#999999',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  infoValor: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FF6B35',
    textAlign: 'center',
  },
  secaoInstrucoes: {
    marginBottom: 24,
  },
  secaoIngredientes: {
    marginBottom: 20,
  },
  tituloSecao: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  boxInstrucoes: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#FF6B35',
  },
  textoInstrucoes: {
    fontSize: 14,
    color: '#333333',
    lineHeight: 22,
  },
  listaIngredientes: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  itemIngrediente: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  circuloIngrediente: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FF6B35',
    marginRight: 12,
  },
  nomeIngrediente: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  medidaIngrediente: {
    fontSize: 12,
    color: '#999999',
    marginLeft: 8,
  },
  loadingText: {
    fontSize: 14,
    color: '#666666',
    marginTop: 12,
  },
  errorText: {
    fontSize: 14,
    color: '#d32f2f',
    textAlign: 'center',
  },
});
