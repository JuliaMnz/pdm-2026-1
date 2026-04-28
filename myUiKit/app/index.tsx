import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Avatar } from 'react-native-paper';
import { Link } from 'expo-router';

export default function PaginaUm() {
  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.titulo}>Página 1: Visualização</Text>

      <Card style={styles.card}>
        <Card.Title 
          title="Componente de Card" 
          subtitle="Exemplo de exibição de dados" 
          left={(props) => <Avatar.Icon {...props} icon="information" />} 
        />
        <Card.Content>
          <Text variant="bodyMedium">
            Nesta primeira página, estamos demonstrando componentes de leitura, como este Card e o Avatar acima.
          </Text>
        </Card.Content>
      </Card>

      {/* Botão que leva para a página 2 */}
      <Link href="/detalhes" asChild>
        <Button mode="contained" icon="arrow-right" style={styles.button}>
          Ver Controles na Página 2
        </Button>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#19192b' },
  titulo: { marginBottom: 20, marginTop: 40, fontWeight: 'bold' },
  card: { marginBottom: 30 },
  button: { marginTop: 10 }
});