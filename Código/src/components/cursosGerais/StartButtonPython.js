import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const StartButtonPython = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Começar</Text>
    </TouchableOpacity>
  );
};

export default StartButtonPython;

const styles = StyleSheet.create({
  button: {
    marginTop: 30,
    backgroundColor: '#0f172a',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 25,
    cursor: 'pointer',
  },
  buttonText: {
    color: '#f5f5f5',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
