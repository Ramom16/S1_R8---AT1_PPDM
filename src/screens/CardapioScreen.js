import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { getPratosPorFiltro } from '../api/mealApi';
import CardapioCard from '../components/Cardapiocard';

export default function CardapioScreen({ route, navigation }) {
  const restaurante = route?.params?.restaurante;
  const [pratos, setPratos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    carregarPratos();
  }, [restaurante]);

  const carregarPratos = async () => {
    if (!restaurante) {
      setError('Restaurante não encontrado');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const dados = await getPratosPorFiltro(restaurante.categoriaAPI);
      setPratos(dados);
    } catch (err) {
      console.error('Erro ao carregar pratos:', err);
      setError('Erro ao carregar o cardápio. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectPrato = (idMeal) => {
    navigation.navigate('DetalhesPratosScreen', { idMeal });
  };

  const renderPrato = ({ item }) => (
    <CardapioCard
      prato={item}
      onSelectPrato={handleSelectPrato}
    />
  );

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>
        Nenhum prato encontrado para este restaurante.
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.containerCenter}>
        <ActivityIndicator size="large" color="#FF6B35" />
        <Text style={styles.loadingText}>Carregando cardápio...</Text>
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nomeRestaurante}>{restaurante?.nome}</Text>
        <Text style={styles.descricaoRestaurante}>
          {restaurante?.descricao}
        </Text>
      </View>

      <FlatList
        data={pratos}
        renderItem={renderPrato}
        keyExtractor={(item) => item.idMeal}
        contentContainerStyle={styles.lista}
        scrollEnabled={true}
        ListEmptyComponent={renderEmptyList}
      />
    </View>
  );
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
  header: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  nomeRestaurante: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  descricaoRestaurante: {
    fontSize: 13,
    color: '#666666',
    lineHeight: 18,
  },
  lista: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 20,
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyText: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
  },
});
