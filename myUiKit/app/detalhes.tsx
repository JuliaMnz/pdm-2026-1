import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, TextInput, Chip, Button, List } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function PaginaDois() {
  const [text, setText] = useState("");
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text variant="headlineMedium" style={styles.titulo}>Página 2: Controles</Text>

      {/* Componente diferente: Input de Texto */}
      <TextInput
        label="Teste o Input do UI Kit"
        value={text}
        onChangeText={setText}
        mode="outlined"
        style={styles.input}
      />

      {/* Componente diferente: Chips */}
      <Text variant="titleMedium" style={styles.subtitulo}>Categorias (Chips):</Text>
      <View style={styles.row}>
        <Chip icon="tag" style={styles.chip} onPress={() => {}}>Mobile</Chip>
        <Chip icon="check" style={styles.chip} onPress={() => {}}>Finalizado</Chip>
      </View>

      {/* Componente diferente: List Section */}
      <List.Item
        title="Configurações do App"
        description="Exemplo de item de lista"
        left={props => <List.Icon {...props} icon="cog" />}
      />

      {/* Botão CORRIGIDO: Agora ele volta para a página anterior */}
      <Button 
        mode="outlined" 
        icon="arrow-left" 
        onPress={() => router.back()} 
        style={styles.button}
      >
        Voltar para Página 1
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  titulo: { marginBottom: 20, marginTop: 40, fontWeight: 'bold' },
  subtitulo: { marginBottom: 10 },
  input: { marginBottom: 20 },
  row: { flexDirection: 'row', marginBottom: 20 },
  chip: { marginRight: 8 },
  button: { marginTop: 40 }
});