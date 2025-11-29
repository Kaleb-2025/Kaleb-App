import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DescriptionSection = () => (
  <View style={styles.description}>
    <Text style={styles.descriptionText}>
      {'\t'}Com a lógica de programação, você aprende a pensar de forma estruturada, resolver
      problemas e criar soluções inteligentes, mesmo antes de escrever uma linha de código.
      {'\n'}{'\t'}Neste módulo, você vai desenvolver o raciocínio lógico com atividades práticas, entender
      como funcionam algoritmos, fluxogramas e estruturas de decisão e repetição. 
      {'\n'}{'\t'}Mesmo sem
      nenhuma experiência anterior, a lógica vai te preparar para qualquer linguagem de
      programação e abrir as portas para o universo da tecnologia com segurança e confiança.
    </Text>
  </View>
);

export default DescriptionSection;

const styles = StyleSheet.create({
  description: { 
    paddingHorizontal: 20,
    paddingTop: 32,
    flexGrow: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    verticalAlign: 'center',
  },

  descriptionText: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'justify',
  },
});
