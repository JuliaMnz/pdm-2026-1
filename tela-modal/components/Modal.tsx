import React from 'react';
import { Modal, StyleSheet, Text, View, Pressable, Linking } from 'react-native';
import { BlurView } from 'expo-blur';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  githubUrl: string;
}

export default function MyModal({ visible, onClose, githubUrl }: CustomModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <BlurView intensity={20} style={StyleSheet.absoluteFill} tint="dark" />
        
        <Pressable style={styles.modalView} onPress={(e) => e.stopPropagation()}>
          <Text style={styles.modalTitle}>Minha Bio</Text>
          <Text style={styles.modalText}>Desenvolvedor React Native.</Text>
          
          <Pressable 
            style={styles.buttonGithub} 
            onPress={() => Linking.openURL(githubUrl)}
          >
            <Text style={styles.textWhite}>Acessar GitHub</Text>
          </Pressable>

          <Pressable onPress={onClose} style={styles.closeBtn}>
            <Text style={styles.textClose}>Fechar</Text>
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  modalText: { marginBottom: 20, textAlign: 'center' },
  buttonGithub: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 10,
    width: '100%',
  },
  textWhite: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  closeBtn: { marginTop: 15 },
  textClose: { color: 'red' }
});