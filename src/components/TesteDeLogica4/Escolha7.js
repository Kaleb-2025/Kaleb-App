import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';  
import styles from '../../styles/styleEspecial';

const Escolha7 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      text: "For e While",
    },
    {
      text: "Foreach e For"

    },
    {
      text: "While e Foreach"
    },
    {
      text: "Foreach e While"
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

export default Escolha7;
