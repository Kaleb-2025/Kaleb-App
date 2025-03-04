/*Caixa de texto(onde o usuário vai digitar*/
import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../../../styles/styles';


const InputBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="|"
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText} 
      />
    </View>
  );
};

export default InputBar;
