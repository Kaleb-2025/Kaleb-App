import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'; 
import styles from '../styles/styleEspecial';  
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/TesteDeLogica4/header.js'; 
import CodeExample from '../components/TesteDeLogica4/CodeExemple.js'; 
import MultipleChoiceOptions from '../components/TesteDeLogica4/MultipleChoiceOptions.js'; 
import { handleTermsPress, handlePrivacyPress } from '../links/links.js';

const tela5 = () => {
  return (
    <ScrollView contentContainerStyle={styles.quizContainer}>
      <Header /> 
      <View style={styles.container}>
        <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>

        <Text style={styles.question}>
          Observe o código abaixo. O que está acontecendo?
        </Text>

        <CodeExample />
        <MultipleChoiceOptions />

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

export default tela5;
