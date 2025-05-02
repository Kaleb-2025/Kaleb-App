import React from 'react';
import { ScrollView, View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/styleEspecial';
import Header from '../../components/TesteDeLogica4/header.js';
import Escolha7 from '../../components/TesteDeLogica4/Escolha7.js';
import { handleTermsPress, handlePrivacyPress } from '../../links/links.js';

const Tela7 = () => {
  return (
    <ScrollView contentContainerStyle={styles.quizContainer}>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>

     <Text style={styleInterno.tt}>
  As frases acima explicam, respectivamente,<Text style={styleInterno.dica}> as estruturas de repetição:</Text>
</Text>

<Text style={styleInterno.question}>
  1. Percorre automaticamente cada elemento de uma lista ou array, sem precisar de um contador.{'\n'}{'\n'}
  2. Usado quando se sabe exatamente quantas vezes o código deve se repetir.
</Text>



        <Escolha7 />

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
const styleInterno = StyleSheet.create({
 dica:{
       color:'#0B1658',
  },
  question: {
    width: 225.6,
    alignSelf: 'center',
    fontSize: 13.6,
    color: '#000',
    textAlign: 'left',
    marginBottom: 16,
    marginTop: 10,
  },
    tt: {
    width: 225.6,
    alignSelf: 'center',
    fontSize: 13.6,
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
    marginTop: 10,
  },
  });


export default Tela7;
