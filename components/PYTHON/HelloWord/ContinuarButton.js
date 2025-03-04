/*Botão Continuar*/
import React from 'react';
import { TouchableOpacity, Text, BackHandler } from 'react-native';
import styles from '../../../styles/styles';


const sairDoApp = () => {
  BackHandler.exitApp();
};

const ContinuarButton = () => {
  return (
    <TouchableOpacity onPress={sairDoApp} style={styles.button}>
      <Text style={styles.buttonText}>Continuar</Text>
    </TouchableOpacity>
  );
};

export default ContinuarButton;
