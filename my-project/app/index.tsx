import React, { useState, useEffect } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  SafeAreaView 
} from 'react-native';

export default function App() {
  const [idade, setIdade] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anoNascimento, setAnoNascimento] = useState<number | null>(null);

  useEffect(() => {
    calcularAno();
  }, [idade, dia, mes]);

  const calcularAno = () => {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth() + 1; 
    const diaAtual = hoje.getDate();

    const numIdade = parseInt(idade);
    const numDia = parseInt(dia);
    const numMes = parseInt(mes);

    if (!isNaN(numIdade) && !isNaN(numDia) && !isNaN(numMes)) {
      let anoCalculado = anoAtual - numIdade;

      if (numMes > mesAtual || (numMes === mesAtual && numDia > diaAtual)) {
        anoCalculado -= 1;
      }

      setAnoNascimento(anoCalculado);
    } else {
      setAnoNascimento(null);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inner}
      >
        <Text style={styles.title}>Calculadora de Nascimento</Text>
        
        <View style={styles.inputGroup}>
          <Text>Idade:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Ex: 25"
            value={idade}
            onChangeText={setIdade}
          />

          <Text>Dia de Nascimento:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Ex: 15"
            value={dia}
            onChangeText={setDia}
          />

          <Text>Mês de Nascimento:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Ex: 08"                    
            value={mes}
            onChangeText={setMes}
          />
        </View>

        {anoNascimento && (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>Você nasceu em:</Text>
            <Text style={styles.yearText}>{anoNascimento}</Text>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  resultBox: {
    marginTop: 20,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
  },
  resultText: {
    fontSize: 18,
    color: '#555',
  },
  yearText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1976d2',
  },
});