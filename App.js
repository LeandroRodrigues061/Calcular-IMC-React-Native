import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso.replace(',', '.'));
    const alturaNum = parseFloat(altura.replace(',', '.'));

    if (!pesoNum || !alturaNum) {
      setMensagem('Preencha os campos corretamente.');
      return;
    }

    const resultado = pesoNum / (alturaNum * alturaNum);
    setImc(resultado.toFixed(2));

    if (resultado < 18.5) setMensagem('Abaixo do peso');
    else if (resultado < 24.9) setMensagem('Peso normal');
    else if (resultado < 29.9) setMensagem('Sobrepeso');
    else setMensagem('Obesidade');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular IMC" onPress={calcularIMC} />
      {imc && (
        <Text style={styles.resultado}>
          Seu IMC é {imc} ({mensagem})
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});
