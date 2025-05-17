import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';

const LoginDados = ({ onPress }) => {
  return (
  <View style={styles.formContainer}>
          <View style={styleInterno.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Digite seu Email"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="email-address"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styleInterno.inputContainer}>
        <TextInput
          style={styleInterno.inputField}
          placeholder="Digite  sua  Senha"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          secureTextEntry
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styleInterno.divider} />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Login</Text>
      </TouchableOpacity>

          <Text style={styles.welcomeText}>
        Esqueceu a senha? 
        <Text style={styles.highlight}> Recuperar senha </Text>
      </Text>

    </View>
  );
};
const styleInterno = StyleSheet.create({
   container: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 420,
    width: '100%',
    paddingTop: 120,
    paddingBottom: 55,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: '#f8faf0',
  },
  inputContainer: {
    borderRadius: 20,
    backgroundColor: 'rgba(237, 237, 237, 1)',
    borderWidth: 1,
    borderColor: 'rgba(206, 206, 206, 1)',
    marginTop: 30,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  inputField: {
    padding: 0,
    fontSize: 12,
    color: '#000',
  },
      
  divider: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(206, 206, 206, 1)',
    alignSelf: 'stretch',
    marginTop: 20,
    marginBottom: 30,
  },
});
export default LoginDados;
