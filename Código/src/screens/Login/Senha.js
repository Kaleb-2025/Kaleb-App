import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import LogoPags from '../../components/Login/LogoPags';
import SenhaLogin from '../../components/Login/Senha';
import { handleTermsPress, handlePrivacyPress } from '../../links/links';
import HeaderLogin from '../../components/Login/headerLogin';
import { useProgress } from '../../components/Login/ProgressLogin';
import { Styleprogress as styles } from '../../styles/styleprogress';

const Senha = ({ navigation }) => {
  const { next } = useProgress(); 

  const handleNext = () => {
    next();
    navigation.navigate('CadastroInicial');
  };

  return (
    <ScrollView contentContainerStyle={styleInterno.container}>
      <HeaderLogin total={5} />
      <LogoPags />
      <View style={{ width: '100%' }}>
        <Text style={styles.welcomeText}> Crie uma senha</Text>
        <SenhaLogin onNext={handleNext} />
      </View>
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

export default Senha;
