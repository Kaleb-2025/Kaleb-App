import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useFonts, Galindo_400Regular } from '@expo-google-fonts/galindo';
import AppLoading from 'expo-app-loading';

import HeaderSection from '../../components/cursosGerais/HeaderSection';
import DescriptionSection from '../../components/cursosGerais/DescriptionSection';
import StartButton from '../../components/cursosGerais/StartButton';

const CursoLogica: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Galindo_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HeaderSection />
      <DescriptionSection />
      <StartButton />
    </ScrollView>
  );
};

export default CursoLogica;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
});
