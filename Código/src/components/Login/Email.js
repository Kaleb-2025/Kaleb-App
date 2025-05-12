import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';

const EmailSignupForm = () => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Digite seu melhor e-mail..."
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="email-address"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Inscrever-se com email</Text>
      </TouchableOpacity>
      <Text style={styles.welcomeText}>
        Já possui uma conta?
        <Text style={styles.highlight}> Faça Login </Text>
      </Text>
    </View>
  );
};


export default EmailSignupForm;
