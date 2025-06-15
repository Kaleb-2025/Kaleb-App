import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Logo from '../../components/Login/Logo';
import SocialLoginButton from '../../components/Login/SocialLoginButton';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';
import EmailSignupForm from '../../components/Login/Email';
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';

const CadastroInicial = ({ navigation }) => {
  const handleEmailSignup = () => {
    navigation.navigate('EmailPag');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Logo />
      <Text style={styles.welcomeText}>
        Acesse o Kaleb e revise seu conhecimento de programação  com uma inscrição rápida e gratuita.
      </Text>
      <View style={styles.socialLoginSection}>
        <SocialLoginButton
          icon={require('../../assets/google.png')}
          text="Continuar com Google"
        />

        <SocialLoginButton
          icon={require('../../assets/maca.png')}
          text="Continuar com Apple"
        />

      </View>
      <View style={styles.divider} />
    <EmailSignupForm onPress={handleEmailSignup} navigation={navigation} />
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

export default CadastroInicial;