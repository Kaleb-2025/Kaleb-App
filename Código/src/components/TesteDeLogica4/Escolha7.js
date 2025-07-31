import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity } from 'react-native';  
import styles from '../../styles/styleEspecial';
import QuizOption from './QuizOption';

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
          {options.length > 0 ? (
            options.map((option, index) => (
              <QuizOption
                key={index}
                content={option.texto}
                isSelected={selectedOption === index}
                onSelect={() => handleOptionSelect(index)}
              />
            ))
          ) : (
            <Text>Carregando respostas...</Text>
          )}
        </View>
  );
};

export default Escolha7;
