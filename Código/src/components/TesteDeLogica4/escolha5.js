import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';  
import styles from '../../styles/styleEspecial';

const Escolha5 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      text: "II, IV e VI estão corretas.",
    },
    {
      text: "I, III, IV e V estão corretas."

    },
    {
      text: "I, III e V estão corretas."
    },
    {
      text: "II, IV, V e VI estão corretas."
    },
    {
      text: " I, IV e VI estão corretas."
    }
  ];

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

export default Escolha5;
