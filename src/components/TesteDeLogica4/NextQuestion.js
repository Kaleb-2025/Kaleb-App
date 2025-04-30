import React from 'react';
import { TouchableOpacity, Text, Alert, Button, View } from 'react-native';
import styles from '../../styles/styleteste';

const ButtonNextQuestion = ({ isCorrect, onNext }) => {
  const handlePress = () => {
    if (isCorrect) {
      alert("Parabéns! Você acertou!");
    } else {
      alert("Errou :(");
    }

    onNext(); // Avança para a próxima pergunta
  };

  return (
    <TouchableOpacity style={styles.nextButton} onPress={handlePress}>
      <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
    </TouchableOpacity>
  );
};

export default ButtonNextQuestion;
