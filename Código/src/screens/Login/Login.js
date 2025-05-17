import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import Logo from '../../components/Login/Logo';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';
import LoginDados from '../../components/Login/login';
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';

const Login = ({ navigation }) => {
  const handleEmailSignup = () => {
    navigation.navigate('CadastroInicial');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    
      <Logo />
      <Text style={styleInterno.welcomeText}>Faça Login para acessar a plataforma</Text>
      
    
      <LoginDados onPress={handleEmailSignup} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Ao se inscrever no Kaleb você concorda com os nossos{' '}
          <Text onPress={handleTermsPress} style={styles.link}>
            Termos de Uso
          </Text>{' '}
          e{' '}
          <Text onPress={handlePrivacyPress} style={styles.link}>
            Política de Privacidade.
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styleInterno = StyleSheet.create({
  welcomeText: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
    width: '100%',
  },

});

export default Login;
