import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import api from '../services/api'; 

interface Usuario {
  nome: string;
  sobre: string;
  telefone: string;
  email: string;
}

export default function Home() {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/users/1')
      .then(res => {
        setUser(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  if (loading) return <View style={styles.center}><ActivityIndicator size="large" color="#2563eb" /></View>;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarText}>{user?.nome?.charAt(0) || 'J'}</Text>
        </View>
        <Text style={styles.nome}>{user?.nome}</Text>
        <Text style={styles.cargo}>Desenvolvedora Full-Stack</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.tituloSecao}>Resumo Profissional</Text>
        <Text style={styles.texto}>{user?.sobre}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.tituloSecao}>Contato e Links (Funcionalidade Extra)</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: '#333' }]} onPress={() => openLink('https://github.com/JuliaMnz')}>
            <Ionicons name="logo-github" size={20} color="#fff" />
            <Text style={styles.btnText}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: '#0077b5' }]} onPress={() => openLink('https://linkedin.com/')}>
            <Ionicons name="logo-linkedin" size={20} color="#fff" />
            <Text style={styles.btnText}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, { backgroundColor: '#ea4335' }]} onPress={() => openLink(`mailto:${user?.email}`)}>
            <Ionicons name="mail-outline" size={20} color="#fff" />
            <Text style={styles.btnText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8fafc' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { padding: 30, backgroundColor: '#2563eb', alignItems: 'center', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 },
  avatarPlaceholder: { width: 80, height: 80, backgroundColor: '#fff', borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  avatarText: { fontSize: 32, fontWeight: 'bold', color: '#2563eb' },
  nome: { fontSize: 26, fontWeight: 'bold', color: '#fff' },
  cargo: { fontSize: 16, color: '#e0e7ff', marginTop: 5 },
  section: { padding: 20, marginTop: 10 },
  tituloSecao: { fontSize: 18, fontWeight: 'bold', color: '#1e293b', marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#cbd5e1', paddingBottom: 5 },
  texto: { fontSize: 15, lineHeight: 24, color: '#475569', textAlign: 'justify' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  btn: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 8, flex: 1, marginHorizontal: 5, justifyContent: 'center' },
  btnText: { color: '#fff', marginLeft: 8, fontWeight: 'bold', fontSize: 12 }
});