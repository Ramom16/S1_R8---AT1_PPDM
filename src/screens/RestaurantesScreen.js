import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { RESTAURANTES } from '../data/mockRestaurantes';
import RestauranteCard from '../components/Restaurantecard';

export default function RestaurantesScreen({ navigation }) {
  const handleSelectCardapio = (restaurante) => {
    navigation.navigate('CardapioScreen', { restaurante });
  };

  const renderRestaurante = ({ item }) => (
    <RestauranteCard
      restaurante={item}
      onSelectCardapio={handleSelectCardapio}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Restaurantes Parceiros</Text>
      <FlatList
        data={RESTAURANTES}
        renderItem={renderRestaurante}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        scrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a1a',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
});
