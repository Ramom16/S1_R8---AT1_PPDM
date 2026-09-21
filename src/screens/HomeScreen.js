import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const handleNavigateToRestaurantes = () => {
    navigation.navigate('Restaurantes');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápios Online</Text>
      <Text style={styles.subtitulo}>
        Explore os melhores restaurantes e descubra pratos incríveis
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={handleNavigateToRestaurantes}
      >
        <Text style={styles.textoBotao}>Mostrar Restaurantes disponíveis</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 36,
    fontWeight: '800',
    color: '#1a1a1a',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  botao: {
    backgroundColor: '#FF6B35',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
