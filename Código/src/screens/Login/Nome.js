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
  const [usuarioCadastrado, setUsuarioCadastrado] = useState(false);

const handleCadastro = async () => {
  if (nomeDigitado.trim() === '') {
    alert('Digite seu nome');
    return;
  }

  setNome(nomeDigitado);

  try {
    // Cadastro do usuário
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password: senha,
      options: { data: { full_name: nomeDigitado } },
    });

    if (signUpError) {
      alert('Erro ao cadastrar: ' + signUpError.message);
      return;
    }

    alert('Cadastro enviado! Por favor, confirme seu e-mail antes de prosseguir.');
    setUsuarioCadastrado(true);

  } catch (error) {
    console.error('Erro inesperado:', error);
    alert('Ocorreu um erro inesperado.');
  }
};

// Login automático após confirmação do e-mail
const loginAutomatico = async () => {
  try {
    const { data: sessionData, error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (loginError) {
      alert('Não foi possível fazer login. Confirme seu e-mail primeiro.');
      return;
    }

    // Agora sim, podemos inserir na tabela info_user
    const userId = sessionData.user.id;
    const { error: infoError } = await supabase.from('info_user').insert([
      { idusuario: userId, xp: 0, cursoandamento: 1 }
    ]);

    if (infoError) {
      console.error('Erro ao criar info_user:', infoError);
    }

    navigation.navigate('Tela1');

  } catch (err) {
    console.error(err);
    alert('Erro ao tentar logar.');
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

        {!usuarioCadastrado ? (
          <TouchableOpacity style={styles.submitButton} onPress={handleCadastro}>
            <Text style={styles.submitButtonText}>Finalizar cadastro</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.submitButton} onPress={loginAutomatico}>
            <Text style={styles.submitButtonText}>Já confirmei meu e-mail / Fazer login</Text>
          </TouchableOpacity>
        )}
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
