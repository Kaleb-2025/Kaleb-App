import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../../styles/styleteste';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';


const TelaAnalise = () => {
  const { correctCount } = useQuizProgress();

  const totalQuestions = 6; // ou defina dinamicamente se preferir

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
          Teste de <Text style={styles.highlight}>lógica</Text>
        </Text>
      <Text style={styleR.result}>
        Você acertou {correctCount} de {totalQuestions} perguntas.
      </Text>
    </View>
  );
};

export default TelaAnalise;

const styleR = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: 20,
  //   backgroundColor: '#fff',
  // },
  // title: {
  //   fontSize: 28,
  //   fontWeight: 'bold',
  //   marginBottom: 16,
  // },
  result: {
    fontSize: 20,
  },
});
