import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function RestauranteCard({ restaurante, onSelectCardapio }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: restaurante.imagem }}
        style={styles.imagem}
      />
      <View style={styles.conteudo}>
        <Text style={styles.nome}>{restaurante.nome}</Text>
        <Text style={styles.descricao}>{restaurante.descricao}</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => onSelectCardapio(restaurante)}
        >
          <Text style={styles.textoBotao}>Visualizar cardápio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
  },
  imagem: {
    width: '100%',
    height: 180,
    backgroundColor: '#e0e0e0',
  },
  conteudo: {
    padding: 16,
  },
  nome: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 13,
    color: '#666666',
    marginBottom: 14,
    lineHeight: 20,
  },
  botao: {
    backgroundColor: '#FF6B35',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
