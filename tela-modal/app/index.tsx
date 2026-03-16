import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function BioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, eu sou a Julia!</Text>
      
      <Link href="/detalhes" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ver mais curiosidades</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8 },
  buttonText: { color: 'white', fontWeight: 'bold' }
});