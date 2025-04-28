import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'; 
import styles from '../styles/styleEspecial';  
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/TesteDeLogica4/header.js'; 
import TelinhaDo8 from '../components/TesteDeLogica4/TelinhaDo8.js'; 
import OptionsTela8 from '../components/TesteDeLogica4/OptionsTela8';
import { handleTermsPress, handlePrivacyPress } from '../links/links.js';

const tela8 = () => {
  return (
    <ScrollView contentContainerStyle={styles.quizContainer}>
      <Header /> 
      <View style={styles.container}>
        <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>

        <Text style={styles.question}>
            Kaleb estava realizando mais uma de suas tarefas diárias de programação e, ao finalizar, percebeu que havia esquecido de usar a estrutura de repetição adequada. Ajude Kaleb!
        </Text>
        <Text style={styles.dica}>
         *DICA: o exercício de Kaleb pedia para somar todos os números de 1 a 10.
        </Text>

        <TelinhaDo8 />
        <OptionsTela8 />

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
        </TouchableOpacity>

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
      </View>
    </ScrollView>
  );
};

export default tela8;
