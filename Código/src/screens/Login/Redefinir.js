import React from 'react';
import { ScrollView, Text, View, StyleSheet, Dimensions } from 'react-native';
import Logo from '../../components/Login/Logo';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';
import Esqueci from '../../components/Login/esqueci';
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';

const Redefinir = ({ navigation }) => {
  const handleEmailSignup = () => {
    navigation.navigate('CadastroInicial');
  };

  return (
    <View style={styleInterno.wrapper}>
      <ScrollView contentContainerStyle={styleInterno.scrollContent}>
        <Logo />
        <Text style={styleInterno.welcomeText}>Redefinir Senha</Text>
        <Esqueci onPress={handleEmailSignup} />
      </ScrollView>
      
      <View style={styleInterno.footer}>
        <Text style={styles.footerText}>
          Ao se inscrever no Kaleb você concorda com os nossos{' '}
          <Text onPress={handleTermsPress} style={styles.link}>Termos de Uso</Text>{' '}
          e{' '}
          <Text onPress={handlePrivacyPress} style={styles.link}>Política de Privacidade</Text>.
        </Text>
      </View>
    </View>
  );
};

const styleInterno = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f8faf0',
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 120,
    paddingBottom: 100, 
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    marginTop: 30,
    marginBottom: 10,
    textAlign: 'center',
    width: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#f8faf0',
    alignItems: 'center',
  },
});

export default Redefinir;
