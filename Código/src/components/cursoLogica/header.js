import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/styleteste';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useQuizProgress } from '../../components/TesteDeLogica4/ProgressContext';

const Header = ({ total = 6 }) => {
const { progress, resetProgress } = useQuizProgress();

 const handleBackPress = () => {
  resetProgress(); 
  navigation.navigate('TelaCurso'); 
};


  return (
    <View style={styles.header}>
       <TouchableOpacity onPress={handleBackPress}>
      <Image
            source={require('../../assets/seta.png')}
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
