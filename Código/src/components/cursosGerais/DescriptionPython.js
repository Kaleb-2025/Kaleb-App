import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DescriptionPython = () => {
  return (
    <View style={styles.description}>
      <Text style={styles.descriptionText}>
        Python é uma linguagem fácil de aprender e extremamente poderosa. {'\n'}
        Com ela, você pode criar desde sites até sistemas de inteligência artificial. {'\n'}
        Em nosso curso, você vai aprender a programar de forma simples e prática, desenvolvendo projetos reais como automações, jogos e ferramentas de análise de dados. {'\n'}
        Não importa sua experiência, Python é a escolha perfeita para dar os primeiros passos no mundo da programação e alcançar novas oportunidades no mercado de tecnologia.
      </Text>
    </View>
  );
};

export default DescriptionPython;

const styles = StyleSheet.create({
  description: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  descriptionText: {
    fontSize: 12,
    color: '#000000',
    textAlign: 'justify',
  },
});
