import React, { useState } from 'react'; 
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'; 
import MyModal from './Modal';

const Profile = () => {
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: 'https://github.com/JuliaMnz.png' }} 
        style={styles.photo} 
      />
      <Text style={styles.name}>Julia Muniz</Text>
      <Text style={styles.bio}>
        Estudante de SI focada em web design. 
        Gosto de resolver problemas reais com tecnologia e criatividade.
        Sempre em busca de aprender novas stacks.
      </Text>

      {/* BOTÃO PARA ABRIR O MODAL */}
      <Pressable 
        style={styles.button} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Ver GitHub</Text>
      </Pressable>

      {/* COMPONENTE DO MODAL */}
      <MyModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        githubUrl="https://github.com/JuliaMnz" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    margin: 20, 
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#007AFF',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Profile;