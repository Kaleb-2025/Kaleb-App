import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
    <Image
         source={require('../../assets/logo.png')}
        style={styles.logoImage}
      />
      
      <Text style={styles.logoText}>KALEB</Text>
    </View>
  );
};



export default Logo;
