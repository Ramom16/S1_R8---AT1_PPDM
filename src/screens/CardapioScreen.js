import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardapioScreen({ route }) {
  const restaurante = route?.params?.restaurante;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio</Text>
      {restaurante && (
        <Text style={styles.subtitulo}>{restaurante.nome}</Text>
      )}
      <Text style={styles.mensagem}>Em desenvolvimento...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  subtitulo: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  mensagem: {
    fontSize: 14,
    color: '#999999',
  },
});
