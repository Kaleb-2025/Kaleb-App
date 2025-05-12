import React from 'react';
import { View, TextInput } from 'react-native';
import { Styleprogress as styles } from '../../styles/styleprogress';
import BotttonContinuar from './BotttonContinuar';

const SenhaLogin = () => {
  const handleSubmit = () => {
    console.log('Senha enviado');
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
              <TextInput
          style={styles.inputField}
          placeholder="Senha"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="default"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          secureTextEntry={true}
        />

      </View>
      <BotttonContinuar title="Continuar" onPress={handleSubmit} />
    </View>
  );
};

export default SenhaLogin;
