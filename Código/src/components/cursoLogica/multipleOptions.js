import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';  
import styles from '../../styles/styleCursoLogica';

const MultipleChoiceOptions = ({ alternativas, selected, setSelected }) => {
  return (
    <View style={styles.optionsContainer}>
      {alternativas.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => setSelected(index)}
          activeOpacity={0.7}
        >
          <View style={styles.optionContent}>
            <View style={[styles.optionCircle, selected === index && styles.optionCircleSelected]}>
              {selected === index && <View style={styles.optionCircleInner} />}
            </View>
            <Text style={styles.optionText}>{option.texto}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MultipleChoiceOptions;
