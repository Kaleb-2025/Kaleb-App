// src/components/TesteDeLogica4/header.js
import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/styleteste';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';

const Header = ({ total = 6 }) => {
const { progress, resetProgress } = useQuizProgress();

 const handleBackPress = () => {
  resetProgress(); // ✅ correto agora
  navigation.navigate('Opcao.js'); // ou apenas 'Opcao' se for o nome da rota
};


  return (
    <View style={styles.header}>
       <TouchableOpacity onPress={handleBackPress}>
      <Image
            source={require('../../assets/seta_preta.png')}
            style={styles.backButton}
        />
      </TouchableOpacity>
      <View style={styles.progressSection}>
       <Image
         source={require('../../assets/logo.png')}
          style={[styles.progressIcon, { marginRight: 10 }]}
        />
      <Text style={styles.progressText}>{progress}/{total}</Text>
      </View>
    </View>
  );
};

export default Header;
