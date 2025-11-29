import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Galindo_400Regular } from '@expo-google-fonts/galindo';
import AppLoading from 'expo-app-loading';

// Importe sua imagem local
import pythonImg from '../../assets/python.png';

const HeaderPython = () => {
  const [fontsLoaded] = useFonts({
    Galindo_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://api.builder.io/api/v1/image/assets/TEMP/0aa64e5f8c52b23f6e853dbc4e16b4c1932f338a?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea',
          }}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Image source={pythonImg} style={styles.courseImage} resizeMode="contain" />

      <View style={styles.separator} />

      <Text style={[styles.title, { fontFamily: 'Galindo_400Regular' }]}>PYTHON</Text>
      <Text style={styles.subtitle}>Dificuldade: Fácil</Text>
      <Text style={styles.subtitle}>Este curso tem a duração de 4 capítulos</Text>
    </View>
  );
};

export default HeaderPython;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0f172a',
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 56,
    width: '100%',
    alignItems: 'flex-start',
  },
  logo: {
    width: 16,
    height: 16,
  },
  courseImage: {
    width: 180,
    height: 180,
    marginTop: 16,
    alignSelf: 'center',
  },
  separator: {
    marginTop: 8,
    height: 1,
    width: 340,
    backgroundColor: '#f5f5f5',
    alignSelf: 'center',
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    marginTop: 30,
    textAlign: 'left',
  },
  subtitle: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'left',
  },
});
