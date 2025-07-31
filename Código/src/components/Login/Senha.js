import React from 'react';
import { View, TextInput } from 'react-native';
import { Styleprogress as styles } from '../../styles/styleprogress';
import BotttonContinuar from './BotttonContinuar';

const SenhaLogin = ({ onNext }) => {
  const handleSubmit = () => {
    onNext();
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Senha"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          secureTextEntry
        />
      </View>
      <BotttonContinuar title="Continuar" onPress={handleSubmit} />
    </View>
  );
};

export default SenhaLogin;
