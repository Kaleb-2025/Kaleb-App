import React from 'react';
import { View, TextInput } from 'react-native';
import { Styleprogress as styles } from '../../styles/styleprogress';
import BotttonContinuar from './BotttonContinuar';

const EmailDadp = () => {
  const handleSubmit = () => {
    console.log('E-mail enviado');
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="  E-mail"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          keyboardType="email-address"
          autoCapitalize="none"
          underlineColorAndroid="transparent"
        />
      </View>
      <BotttonContinuar title="Continuar" onPress={handleSubmit} />
    </View>
  );
};

export default EmailDadp;
