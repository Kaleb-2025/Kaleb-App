import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const HeaderSection: React.FC = () => {
  const navigation = useNavigation();
  const navigateTo = () => {
    navigation.navigate('Home');
}
  return (
    <View style={styles.header}>
    <TouchableOpacity
      onPress={navigateTo}
    >
      <Image
        source={{
          uri: 'https://api.builder.io/api/v1/image/assets/TEMP/0aa64e5f8c52b23f6e853dbc4e16b4c1932f338a?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea',
        }}
        style={[styles.logo, { cursor: 'pointer' }]}
        resizeMode="contain"
      />
      </TouchableOpacity>

      <Image
        source={{
          uri: 'https://api.builder.io/api/v1/image/assets/TEMP/ef5f857873c601415461611e8e64ae27246b53ad?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea',
        }}
        style={styles.courseImage}
        resizeMode="contain"
      />

      <View style={styles.separator} />

      <Text style={[styles.title, { fontFamily: 'Galindo_400Regular' }]}>
        Lógica de programação
      </Text>
      <Text style={styles.subtitle}>Tutorial</Text>
      <Text style={styles.subtitle}>Este curso tem a duração de 4 Módulos</Text>
    </View>
  );
};

export default HeaderSection;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0f172a',
    paddingHorizontal: 32,
    alignItems: 'flex-start',  
    justifyContent: 'center',
    flexGrow: 1,
    paddingTop: 32,
    paddingBottom: 32,
    width: '100%',
  },
  logo: {
    width: 16,
    height: 16,
  },
  courseImage: {
    width: 200,
    height: 200,
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
    fontSize: 20,
    color: '#ffffff',
    marginTop: 32,
    textAlign: 'left',
  },
  subtitle: {
    color: '#ffffff',
    marginTop: 10,
    fontSize: 14.5,
    textAlign: 'left',
  },
});
