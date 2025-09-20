// src/screens/Login/EmailConfirmado.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EmailConfirmado = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://rsggftidydvuzvmealpg.supabase.co/storage/v1/object/public/kaleb-image//image%203.png' }}
        style={styles.image}
      />
      <Text style={styles.title}>E-mail confirmado com sucesso!</Text>
      <Text style={styles.subtitle}>Agora você pode acessar o app.</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Programa')} // ou a tela que desejar
      >
        <Text style={styles.buttonText}>Ir para o app</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailConfirmado;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0A165A',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#0A165A',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
