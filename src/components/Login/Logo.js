import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { CadastroStyles as styles } from '../../styles/CadastroStyle';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={{
          uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8f2687fa68c291a57c6b98a362754f9b70577b08?placeholderIfAbsent=true&apiKey=9fa5fd1f53e14698946a72b8311015ea',
        }}
        style={styles.logoImage}
      />
      <Text style={styles.logoText}>KALEB</Text>
    </View>
  );
};



export default Logo;
