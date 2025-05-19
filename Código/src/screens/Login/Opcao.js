import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import LogoPags from '../../components/Login/LogoPags';
import HeaderLogin from '../../components/Login/headerLogin';
import { handleTermsPress, handlePrivacyPress } from '../../links/links';
import { useLoginProgress } from '../../components/Login/ProgressLogin';
import { Styleprogress as styles } from '../../styles/styleprogress';

const Opcao = ({ navigation }) => {
  const { next } = useLoginProgress();

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSignupPress = () => {
    if (!selectedOption) {
      Alert.alert('Atenção', 'Por favor, selecione uma opção.');
    } else {
      Alert.alert('Inscrição', `Você selecionou: ${selectedOption}`);
      next();
      navigation.navigate('Nome');
    }
  };

  return (
    <ScrollView contentContainerStyle={styleInterno.container}>
      <HeaderLogin total={5} />
      <LogoPags />
      <View style={{ width: '100%' }}>
        <Text style={styleInterno.welcomeText}>Você já teve algum contato com programação?</Text>
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
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Ao se inscrever no Kaleb você concorda com os nossos{' '}
          <Text onPress={handleTermsPress} style={styles.link}>
            Termos de Uso
          </Text>{' '}
          e{' '}
          <Text onPress={handlePrivacyPress} style={styles.link}>
            Política de Privacidade.
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

const styleInterno = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: 420,
    width: '100%',
    paddingTop: 120,
    paddingBottom: 55,
    paddingHorizontal: 40,
    alignItems: 'center',
    backgroundColor: '#f8faf0',
  },
   welcomeText: {
  fontSize: 16,
  marginTop: 50,
  marginBottom: 50,
  textAlign: 'left',
  width: '100%',
},
});

export default Opcao;
