import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const projetosList = [
  {
    id: '1',
    titulo: 'API de Portfólio',
    tecnologias: 'Node.js, Express, Sequelize, PostgreSQL',
    descricao: 'Backend completo desenvolvido para fornecer dados dinâmicos para um aplicativo móvel.',
    link: 'https://github.com/JuliaMnz'
  },
  {
    id: '2',
    titulo: 'App Portfólio Mobile',
    tecnologias: 'React Native, Expo Router, TypeScript',
    descricao: 'Aplicativo móvel responsivo focado em apresentar histórico acadêmico e profissional.',
    link: 'https://github.com/JuliaMnz'
  }
];

export default function Projetos() {
  return (
    <View style={styles.container}>
      <FlatList
        data={projetosList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.titulo}>{item.titulo}</Text>
            <Text style={styles.tecnologias}>{item.tecnologias}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
            <TouchableOpacity style={styles.btnRepo} onPress={() => Linking.openURL(item.link)}>
              <Ionicons name="logo-github" size={18} color="#fff" />
              <Text style={styles.btnText}>Ver Repositório</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5', padding: 15 },
  card: { backgroundColor: '#fff', padding: 18, borderRadius: 12, marginBottom: 15, elevation: 2, borderLeftWidth: 4, borderLeftColor: '#2563eb' },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#1e293b' },
  tecnologias: { fontSize: 13, color: '#2563eb', fontWeight: 'bold', marginVertical: 5 },
  descricao: { fontSize: 14, color: '#475569', marginBottom: 15 },
  btnRepo: { flexDirection: 'row', backgroundColor: '#333', padding: 10, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: '#fff', marginLeft: 8, fontWeight: 'bold' }
});