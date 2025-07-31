import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';
const EmailSignupForm = ({ onPress, navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.formContainer}>
      <TouchableOpacity style={styles.submitButton} onPress={onPress}>
        <Text style={styles.submitButtonText}>Inscrever-se com email</Text>
      </TouchableOpacity>

      {/* vai para o login */}
      <Text style={styles.welcomeText}>
        Já possui uma conta?
        <Text style={styles.highlight} onPress={handleLoginPress}> Faça Login </Text>
      </Text>
    </View>
  );
};

export default EmailSignupForm;