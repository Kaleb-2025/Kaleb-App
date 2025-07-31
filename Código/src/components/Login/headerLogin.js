import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/styleteste';
import { useLoginProgress } from '../../components/Login/ProgressLogin';
import { useNavigation } from '@react-navigation/native';

const HeaderLogin = ({ total = 5 }) => {
  const { count, reset } = useLoginProgress(); // ⬅️ adiciona `reset`
  const navigation = useNavigation();

  const handleBackPress = () => {
    reset(); // ⬅️ reinicia o contador
    navigation.navigate('CadastroInicial'); // ⬅️ navega para tela inicial
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
        <Text style={styles.progressText}>{count}/{total}</Text>
      </View>
    </View>
  );
};

export default HeaderLogin;
