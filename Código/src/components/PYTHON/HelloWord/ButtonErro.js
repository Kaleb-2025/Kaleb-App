/*Botão Erro*/
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../../styles/styles';


const ButtonErro = ({ onRetry }) => {
  return (
    <TouchableOpacity style={styles.button_erro} onPress={onRetry}>
      <Text style={styles.buttonText_erro}>Tente novamente!</Text>
    </TouchableOpacity>
  );
};

export default ButtonErro;
