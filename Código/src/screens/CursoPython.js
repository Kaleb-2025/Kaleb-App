import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HeaderPython from '../components/cursosGerais/HeaderPython';
import DescriptionPython from '../components/cursosGerais/DescriptionPython';
import StartButtonPython from '../components/cursosGerais/StartButtonPython';

const CursoPython = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderPython />
      <DescriptionPython />
      <StartButtonPython />
    </ScrollView>
  );
};

export default CursoPython;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});
