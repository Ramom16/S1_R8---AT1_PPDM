import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function CardapioCard({ prato, onSelectPrato }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onSelectPrato(prato.idMeal)}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: prato.strMealThumb }}
        style={styles.imagem}
      />
      <View style={styles.conteudo}>
        <Text style={styles.nome} numberOfLines={2}>
          {prato.strMeal}
        </Text>
        <Text style={styles.id}>#{prato.idMeal}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 3.84,
  },
  imagem: {
    width: '100%',
    height: 160,
    backgroundColor: '#e0e0e0',
  },
  conteudo: {
    padding: 12,
  },
  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 6,
    lineHeight: 22,
  },
  id: {
    fontSize: 12,
    color: '#FF6B35',
    fontWeight: '600',
  },
});
