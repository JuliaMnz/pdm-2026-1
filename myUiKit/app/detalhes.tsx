import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Avatar } from 'react-native-paper';
import { Link } from 'expo-router';

export default function PaginaUm() {
  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.titulo}>Página 1: UI Kit</Text>

      <Card style={styles.card}>
        <Card.Title 
          title="Componente Card" 
          subtitle="Sistemas para Internet" 
          left={(props) => <Avatar.Icon {...props} icon="laptop" />} 
        />
        <Card.Content>
          <Text variant="bodyMedium">Este é um exemplo de card do React Native Paper.</Text>
        </Card.Content>
      </Card>

      <Link href="/detalhes" asChild>
        <Button mode="contained" icon="arrow-right">
          Ir para a Página 2
        </Button>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f0f0f0' },
  titulo: { marginBottom: 20, marginTop: 40 },
  card: { marginBottom: 20 }
});