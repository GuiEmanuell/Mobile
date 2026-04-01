import React, { useState } from 'react';
import { View, StyleSheet, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { CustomInput } from '../components/input';
import { CustomButton } from '../components/botaoCustomizado';

export default function FormScreen() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');

  const handlePress = () => {
    if (!nome || !valor) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    
    Alert.alert('Sucesso!', `Nome: ${nome}\nValor Numérico: ${valor}`);
    console.log('Dados enviados:', { nome, valor });
    
    setNome('');
    setValor('');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.formContainer}>
        <CustomInput 
          label="Nome completo" 
          placeholder="Ex: João da Silva" 
          value={nome}
          onChangeText={setNome}
          autoCapitalize="words"
        />
        <CustomInput 
          label="Valor numérico" 
          placeholder="Ex: 1234" 
          value={valor}
          onChangeText={setValor}
          keyboardType="numeric" 
        />
        
        <CustomButton title="Enviar Dados" onPress={handlePress} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  formContainer: {
    padding: 20,
    flex: 1,
    justifyContent: 'center', 
  },
});