import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Styleprogress as styles } from '../../styles/styleprogress';
import BotttonContinuar from './BotttonContinuar';

const Nivel = ({ onNext }) => {

  const handleSubmit = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <View style={styles.formContainer}>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => handleOptionSelect('Avançado')}
          >
            <View
              style={[
                styles.radioCircle,
                selectedOption === 'Avançado' && styles.radioCircleSelected,
              ]}
            >
              {selectedOption === 'Avançado' && <View style={styles.selectedDot} />}
            </View>
            <Text
              style={[
                styles.radioLabel,
                selectedOption === 'Avançado' && styles.radioLabelSelected,
              ]}
            >
              Avançado
            </Text>
          </TouchableOpacity>
      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => handleOptionSelect('Iniciante')}
      >
        <View
          style={[
            styles.radioCircle,
            selectedOption === 'Iniciante' && styles.radioCircleSelected,
          ]}
        >
          {selectedOption === 'Iniciante' && <View style={styles.selectedDot} />}
        </View>
        <Text
          style={[
            styles.radioLabel,
            selectedOption === 'Iniciante' && styles.radioLabelSelected,
          ]}
        >
          Iniciante
        </Text>
      </TouchableOpacity>
          <TouchableOpacity
            style={styles.radioOption}
            onPress={() => handleOptionSelect('Mediano')}
          >
            <View
              style={[
                styles.radioCircle,
                selectedOption === 'Mediano' && styles.radioCircleSelected,
              ]}
            >
              {selectedOption === 'Mediano' && <View style={styles.selectedDot} />}
            </View>
            <Text
              style={[
                styles.radioLabel,
                selectedOption === 'Mediano' && styles.radioLabelSelected,
              ]}
            >
              Mediano
            </Text>
          </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSignupPress}>
        <Text style={styles.submitButtonText}>Continuar</Text>
      </TouchableOpacity>

      <BotttonContinuar title="Continuar" onPress={handleSubmit} />
    </View>
  );
};

export default Nivel;
