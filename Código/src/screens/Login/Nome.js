// src/screens/Login/Nome.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import LogoPags from '../../components/Login/LogoPags';
import HeaderLogin from '../../components/Login/headerLogin';
import { Styleprogress as styles } from '../../styles/styleprogress';
import { useCadastro } from './CadastroContext';
import { supabase } from '../../../App';

const Nome = ({ navigation }) => {
  const [nomeDigitado, setNomeDigitado] = useState('');
  const { email, senha, setNome } = useCadastro();

  const handleCadastro = async () => {
    if (nomeDigitado.trim() === '') {
      alert('Digite seu nome');
      return;
    }

    setNome(nomeDigitado);

    const { error } = await supabase.auth.signUp({
      email: email,
      password: senha,
      options: {
        data: {
          nome: nomeDigitado,
        },
      },
    });

    if (error) {
      alert('Erro ao cadastrar: ' + error.message);
    } else {
      alert('Cadastro realizado com sucesso!');
      navigation.navigate('Programa'); // ou outra tela de boas-vindas
    }
  };

  return (
    <ScrollView contentContainerStyle={styleInterno.container}>
      <HeaderLogin total={5} />
      <LogoPags />
      <View style={{ width: '100%' }}>
        <Text style={styles.welcomeText}>Qual é o seu nome?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite seu nome"
            value={nomeDigitado}
            onChangeText={setNomeDigitado}
            style={styleInterno.input}
          />
        </View>
         <TouchableOpacity style={styles.submitButton} onPress={handleCadastro}>
        <Text style={styles.submitButtonText}>Finalizar cadastro</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styleInterno = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 420,
    width: '100%',
    paddingTop: 120,
    paddingBottom: 55,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: '#f8faf0',
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
    marginTop: 0,
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
});

export default Nome;
