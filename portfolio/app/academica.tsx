import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../services/api';

interface Experiencia {
  id: number;
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
}

export default function Academica() {
  const [experiencias, setExperiencias] = useState<Experiencia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/experiencias')
    .then((response) => {
    // Filtro duplo: Garante que é o meu id e que é acadêmico
    const minhasAcademicas = response.data.filter((item: any) => 
      item.userId === 1 && 
      (item.empresa.toLowerCase().includes('unicap') || item.empresa.toLowerCase().includes('faculdade'))
    );
    setExperiencias(minhasAcademicas);
    setLoading(false);
  });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#2563eb" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={experiencias}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.headerCard}>
              <Ionicons name="school" size={24} color="#2563eb" />
              <Text style={styles.cargo}>{item.cargo}</Text>
            </View>
            <Text style={styles.empresa}>{item.empresa} • {item.periodo}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhuma experiência acadêmica encontrada.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5', padding: 15 },
  card: { backgroundColor: '#fff', padding: 18, borderRadius: 12, marginBottom: 15, elevation: 2 },
  headerCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  cargo: { fontSize: 18, fontWeight: 'bold', color: '#1e293b', marginLeft: 10, flex: 1 },
  empresa: { fontSize: 14, fontWeight: '600', color: '#64748b', marginBottom: 8 },
  descricao: { fontSize: 14, color: '#475569', lineHeight: 22 },
  empty: { textAlign: 'center', marginTop: 50, color: '#94a3b8', fontSize: 16 }
});