import React, { useState } from 'react'; 
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';  
import styles from '../../styles/styleEspecial';

const OptionsTela8 = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      text: "For",
    },
    {
      text: "Foreach "
    },
    {
      text: "While "
    },
    {
      text: "Do-While"
    }
  ];

  return (
    <View style={styleInterno.optionsContainer}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styleInterno.option}
          onPress={() => setSelectedOption(index)}
        >
          <View style={styleInterno.optionContent}>
            <View style={[styleInterno.optionCircle, selectedOption === index && styleInterno.optionCircleSelected]}>
              {selectedOption === index && <View style={styleInterno.optionCircleInner} />}
            </View>
            <Text style={styleInterno.optionText}>{option.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styleInterno = StyleSheet.create({
optionsContainer: {
    width: '100%',
    paddingHorizontal: 26,
    marginVertical: 16,
    alignItems: 'center',
  },
  option: {
    marginVertical: 8,
    width: '100%',
    alignItems: 'left',
  },
  optionContent: {
    marginVertical:10,
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'center',
  },
  optionCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: 'white',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionCircleSelected: {
    backgroundColor: '#0B1658',
    borderColor: '#0B1658',
  },
  optionCircleInner: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#0B1658',
  },
  optionText: {
    fontSize: 14,
    color: '#000',
    flex: 1,
    lineHeight: 19.2,
  },
  });
export default OptionsTela8;
