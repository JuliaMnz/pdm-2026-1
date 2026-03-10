import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.card}>
      {/* Você pode usar uma URL do seu GitHub ou uma imagem local com require() */}
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
});

export default Profile;