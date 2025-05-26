// src/components/Login/EmailDadp.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const EmailDadp = ({ onNext }) => {
  const [email, setEmail] = useState('');

  const handlePress = () => {
    if (email.trim() !== '') {
      onNext(email);
    } else {
      alert('Digite um e-mail válido');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="rgba(0, 0, 0, 0.5)"
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handlePress}>
        <Text style={styles.submitButtonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
    inputField: {
    padding: 0,
    fontSize: 12,
    color: '#000',
  },
    inputContainer: {
    borderRadius: 20,
    backgroundColor: 'rgba(237, 237, 237, 1)',
    borderWidth: 1,
    borderColor: 'rgba(206, 206, 206, 1)',
    marginTop: 0,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  submitButton: {
    borderRadius: 20,
    backgroundColor: '#080C2E',
    marginTop: 20,
    padding: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default EmailDadp;
