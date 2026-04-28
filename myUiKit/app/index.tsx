import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, Button, Card, Avatar, Divider } from 'react-native-paper';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>UI Kit Gallery</Text>
      
      {/* Exemplo de Card e Avatar */}
      <Card style={styles.card}>
        <Card.Title 
          title="Perfil do Desenvolvedor" 
          subtitle="Sistemas para Internet" 
          left={(props) => <Avatar.Icon {...props} icon="account" />} 
        />
        <Card.Content>
          <Text variant="bodyMedium">
            Este card é um componente nativo do React Native Paper.
          </Text>
        </Card.Content>
      </Card>

      <Divider style={styles.divider} />

      {/* Exemplo de Botões com diferentes estados */}
      <View style={styles.row}>
        <Button mode="contained" onPress={() => {}}>Contained</Button>
        <Button mode="outlined" onPress={() => {}}>Outlined</Button>
      </View>

      {/* Navegação para a segunda página */}
      <Link href="/detalhes" asChild>
        <Button mode="text" style={{ marginTop: 20 }}>
          Ver mais detalhes 
        </Button>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#f5f5f5' },
  title: { marginBottom: 20, textAlign: 'center', fontWeight: 'bold' },
  card: { elevation: 4, marginBottom: 16 },
  divider: { marginVertical: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-around' }
});