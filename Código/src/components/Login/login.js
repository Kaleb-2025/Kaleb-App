import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { supabase } from '../../../App';

const LoginDados = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLoginPress = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: senha,
    });

    if (error) {
      console.error('Erro ao fazer login:', error.message);
      Alert.alert('Erro de login', error.message);
    } else {
      console.log('Login bem-sucedido!', data);
      navigation.navigate('Home'); // ou qualquer tela que represente o app logado
    }
  };

  return (
    <View style={styles.formContainer}>
     <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Digite seu Email"
          placeholderTextColor="gray"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
       <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputField}
        placeholder="Digite sua Senha"
        placeholderTextColor="gray"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleLoginPress}>
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPasswordText}>
        Esqueceu a senha?{' '}
        <Text style={styles.highlight} onPress={() => navigation.navigate('Redefinir')}>
          Recuperar senha
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
   inputField: {
    padding: 0,
    fontSize: 12,
    color: '#000',
  },
    inputContainer: {
    borderRadius: 20,
    backgroundColor: 'rgba(237, 237, 237, 1)',
    borderWidth: 1,
    borderColor: 'rgba(206, 206, 206, 1)',
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  submitButton: {
    borderRadius: 20,
    backgroundColor: '#080C2E',
    marginTop: 20,
    padding: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  forgotPasswordText: {
    marginTop: 15,
    textAlign: 'center',
  },
  highlight: {
    color: '#080C2E',
    fontWeight: 'bold',
  },
});

export default LoginDados;
