import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';  
import styles from '../../styles/styleEspecial';

const MultipleChoiceOptions = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <View style={styles.optionsContainer}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => setSelectedOption(index)}
        >
          <View style={styles.optionContent}>
            <View style={[styles.optionCircle, selectedOption === index && styles.optionCircleSelected]}>
              {selectedOption === index && <View style={styles.optionCircleInner} />}
            </View>
            <Text style={styles.optionText}>{option.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default MultipleChoiceOptions;
