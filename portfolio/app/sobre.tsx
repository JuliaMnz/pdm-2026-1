import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Sobre o Projeto</Text>
        <Text style={styles.texto}>
          Este aplicativo foi desenvolvido como atividade da disciplina de Dispositivos Móveis.
          Seu objetivo é servir como um portfólio interativo consumindo dados de uma API real.
        </Text>

        <Text style={styles.subtitulo}>Tecnologias Utilizadas</Text>
        <Text style={styles.bullet}>• React Native & Expo</Text>
        <Text style={styles.bullet}>• Expo Router (Navegação por Abas)</Text>
        <Text style={styles.bullet}>• TypeScript</Text>
        <Text style={styles.bullet}>• Axios (Consumo de API)</Text>
        <Text style={styles.bullet}>• Node.js & Express (Backend)</Text>
        <Text style={styles.bullet}>• PostgreSQL via NeonDB (Banco de Dados)</Text>
        <Text style={styles.bullet}>• Vercel (Hospedagem da API)</Text>

        <Text style={styles.subtitulo}>Funcionalidade Extra Implementada</Text>
        <Text style={styles.texto}>
          Foi implementada a integração com a biblioteca <Text style={{fontWeight: 'bold'}}>Linking</Text> nativa. 
          Na tela Home, há botões dinâmicos que redirecionam o usuário diretamente para plataformas externas 
          como o App nativo do GitHub, LinkedIn e cliente de E-mail do smartphone, facilitando o contato profissional.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5', padding: 15 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 12, elevation: 2 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#1e293b', marginBottom: 15 },
  subtitulo: { fontSize: 18, fontWeight: 'bold', color: '#2563eb', marginTop: 20, marginBottom: 10 },
  texto: { fontSize: 15, color: '#475569', lineHeight: 24, textAlign: 'justify' },
  bullet: { fontSize: 15, color: '#334155', marginLeft: 10, marginVertical: 4 }
});