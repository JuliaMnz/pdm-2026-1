import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Profile from '../components/Profile';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>
        App criado para a disciplina Programação para Dispositivos Móveis
      </Text>
      
      <Profile />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 30,
  },
});