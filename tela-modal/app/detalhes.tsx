import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function DetalhesModal() {
  const router = useRouter(); 

  return (
    <View style={styles.overlay}>
      <View style={styles.modalCard}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Detalhamento Técnico</Text>
          
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🛠️ Tecnologias em Foco</Text>
            <Text style={styles.text}>
              Atualmente desenvolvendo projetos com **React Native** e **Expo Router**, 
              focando em navegação moderna e interfaces responsivas.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🔌 Eletrônica & Simulação</Text>
            <Text style={styles.text}>
              Praticando lógica de programação e circuitos no **Tinkercad**. 
              Recentemente trabalhei em projetos com Arduino envolvendo LEDs, 
              resistores e botões para criar sistemas interativos.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>📈 Objetivos</Text>
            <Text style={styles.text}>
              Consolidar conhecimentos em TypeScript e integração de APIs 
              em dispositivos móveis.
            </Text>
          </View>
        </ScrollView>

        {/* Botão de Voltar Personalizado */}
        <Pressable 
          style={styles.backButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Voltar para a Bio</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '85%',
    maxHeight: '70%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  text: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});