// src/components/TesteDeLogica4/NextButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../../styles/styleteste';

const NextButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.nextButton} onPress={onPress}>
      <Text style={styles.nextButtonText}>Próxima</Text>
    </TouchableOpacity>
  );
};

export default NextButton;
