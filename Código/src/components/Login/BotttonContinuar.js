import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';

const BotttonContinuar = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.submitButton} onPress={onPress}>
      <Text style={styles.submitButtonText}>{title}</Text>
    </TouchableOpacity>
    
  );
};

export default BotttonContinuar;
