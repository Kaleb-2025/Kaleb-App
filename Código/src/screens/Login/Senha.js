// src/screens/Login/Senha.js
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import LogoPags from '../../components/Login/LogoPags';
import HeaderLogin from '../../components/Login/headerLogin';
import { handleTermsPress, handlePrivacyPress } from '../../links/links';
import { Styleprogress as styles } from '../../styles/styleprogress';
import { useCadastro } from './CadastroContext';

const Senha = ({ navigation }) => {
  const [senhaDigitada, setSenhaDigitada] = useState('');
  const { setSenha } = useCadastro();

  const handleNext = () => {
    if (senhaDigitada.trim() !== '') {
      setSenha(senhaDigitada);
      navigation.navigate('Nome');
    } else {
      alert('Digite uma senha válida');
    }
  };

  return (
    <ScrollView contentContainerStyle={styleInterno.container}>
      <HeaderLogin total={5} />
      <LogoPags />
      <View style={{ width: '100%' }}>
        <Text style={styles.welcomeText}>Crie uma senha</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Digite sua senha"
            value={senhaDigitada}
            onChangeText={setSenhaDigitada}
            secureTextEntry
            style={styleInterno.inputField}
          />
        </View>
         <TouchableOpacity style={styles.submitButton} onPress={handleNext}>
        <Text style={styles.submitButtonText}>Avançar</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Ao se inscrever no Kaleb você concorda com os nossos{' '}
          <Text onPress={handleTermsPress} style={styles.link}>Termos de Uso</Text>{' '}
          e{' '}
          <Text onPress={handlePrivacyPress} style={styles.link}>Política de Privacidade.</Text>
        </Text>
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
});

export default Senha;
