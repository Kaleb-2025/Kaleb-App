import React from 'react';
import { View, TextInput } from 'react-native';
import { Styleprogress as styles } from '../../styles/styleprogress';
import BotttonContinuar from './BotttonContinuar';

const NomeLogin = ({ onNext }) => {
  const handleSubmit = () => {
    console.log('Nome enviado');
    if (onNext) {
      onNext(); // Navegar para a próxima tela
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Nome"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="default"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          secureTextEntry={false}
        />
      </View>
      <BotttonContinuar title="Continuar" onPress={handleSubmit} />
    </View>
  );
};

export default NomeLogin;
