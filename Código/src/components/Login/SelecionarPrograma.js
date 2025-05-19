import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Styleprogress as styles } from '../../styles/styleprogress';
import BotttonContinuar from './BotttonContinuar';

const SelecionaPrograma = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSignupPress = () => {
    if (!selectedOption) {
      Alert.alert('Atenção', 'Por favor, selecione uma opção.');
    } else {
      Alert.alert('Inscrição', `Você selecionou: ${selectedOption}`);
    }
  };

  const handleSubmit = () => {
    if (onNext) {
      onNext();
    }
  };

  return (
    <View style={styles.formContainer}>
      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => handleOptionSelect('Sim, já programei antes')}
      >
        <View
          style={[
            styles.radioCircle,
            selectedOption === 'Sim, já programei antes' && styles.radioCircleSelected,
          ]}
        >
          {selectedOption === 'Sim, já programei antes' && <View style={styles.selectedDot} />}
        </View>
        <Text
          style={[
            styles.radioLabel,
            selectedOption === 'Sim, já programei antes' && styles.radioLabelSelected,
          ]}
        >
          Sim, já programei antes.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.radioOption}
        onPress={() => handleOptionSelect('Não, nunca programei')}
      >
        <View
          style={[
            styles.radioCircle,
            selectedOption === 'Não, nunca programei' && styles.radioCircleSelected,
          ]}
        >
          {selectedOption === 'Não, nunca programei' && <View style={styles.selectedDot} />}
        </View>
        <Text
          style={[
            styles.radioLabel,
            selectedOption === 'Não, nunca programei' && styles.radioLabelSelected,
          ]}
        >
          Não, nunca programei.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.submitButton} onPress={handleSignupPress}>
        <Text style={styles.submitButtonText}>Continuar</Text>
      </TouchableOpacity>

      <BotttonContinuar title="Continuar" onPress={handleSubmit} />
    </View>
  );
};

export default SelecionaPrograma;
