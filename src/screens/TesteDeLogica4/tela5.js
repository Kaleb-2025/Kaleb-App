import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/styleEspecial';
import Header from '../../components/TesteDeLogica4/header.js';
import Telinha5 from '../../components/TesteDeLogica4/Telinha5.js';
import Escolha5 from '../../components/TesteDeLogica4/escolha5.js';
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';

const Tela5 = () => {
  return (
    <ScrollView contentContainerStyle={styles.quizContainer}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>

        <Text style={styles.question}>
          Observe as variáveis definidas abaixo e com
          base na análise das afirmações escolha a
          alternativa correta.
        </Text>

        <Telinha5 />

        <Text style={styles.question}>
          I. d pode receber os valores: FALSE ou TRUE.{'\n'}
          II. a pode receber os valores: 1 ou Maria.{'\n'}
          III. c pode receber o valor 3.14 e depois 894.{'\n'}
          IV. b pode receber os valores: Antonio e 7234.{'\n'}
          V. d pode receber os valores: FALSE ou TRUE.{'\n'}
          VI. c só pode receber um valor.
        </Text>

        <Escolha5 />

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

export default Tela5;
