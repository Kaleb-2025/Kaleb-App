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
    email,
    password: senha,
    options: {
      data: { full_name: nomeDigitado }   // <- aqui
    }
  });

  if (error) {
    alert('Erro ao cadastrar: ' + error.message);
  } else {
    alert('Cadastro realizado com sucesso! Confirme o e‑mail para prosseguir.');
    navigation.navigate('Programa');
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
});

export default Nome;
