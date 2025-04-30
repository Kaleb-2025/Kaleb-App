import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/styleteste'; 
import { handleTermsPress, handlePrivacyPress } from '../../links/links';  

const QuizOption = ({ content, isSelected, onSelect }) => {
  return (
    <TouchableOpacity style={styles.quizOption} onPress={onSelect}>
      <View
        style={[
          styles.radioButton,
          isSelected && styles.radioButtonSelected,
          { marginRight: 10 },
        ]}
      />
      <Text style={styles.optionText}>{content}</Text>
    </TouchableOpacity>
  );
};

export default QuizOption;
