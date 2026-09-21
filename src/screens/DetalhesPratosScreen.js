import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetalhesPratosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Prato</Text>
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
    marginBottom: 20,
  },
  mensagem: {
    fontSize: 14,
    color: '#999999',
  },
});
